import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandlerFn,
    HttpRequest
} from '@angular/common/http'
import {inject} from '@angular/core'
import {Observable, throwError} from 'rxjs'
import {catchError} from 'rxjs/operators'
import {AuthService} from '../../auth/auth.service'

export const authInterceptor = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
    const authService = inject(AuthService)
    const token = authService.accessToken

    let newRequest = req.clone()

    if (token) {
        newRequest = req.clone({
            headers: req.headers.set(
                'Authorization',
                'Bearer ' + token
            ),
        })
    }

    return next(newRequest).pipe(
        catchError((error) => {
            if (error instanceof HttpErrorResponse && error.status === 401) {
                authService.signOut()
                location.reload()
            }

            return throwError(error)
        })
    )
}
