import {
    HttpErrorResponse,
    HttpInterceptorFn,
} from '@angular/common/http'
import {inject, Injector} from '@angular/core'
import {Router} from '@angular/router'
import {throwError} from 'rxjs'
import {catchError} from 'rxjs/operators'
import {SnackbarService} from '../../shared/snackbar/snackbar.service'
import {AuthService} from '../../auth/auth.service'


export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(
        catchError((err: any) => {
            const injector: Injector = inject(Injector)
            const snackbarService: SnackbarService = inject(SnackbarService)
            const auth: AuthService = inject(AuthService)
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    auth.accessToken = null
                    const router = injector.get(Router)
                    router.navigate(['/auth'], {replaceUrl: true})
                    snackbarService.openDanger('You are not authorized to access this resource. Please login again.')
                    console.error('Unauthorized request:', err)
                } else {
                    console.error('HTTP error:', err)
                }
            } else {
                console.error('An error occurred:', err)
            }

            return throwError(() => err)
        })
    )
}

