import {HttpClient} from '@angular/common/http'
import {inject, Injectable} from '@angular/core'
import {Observable, of, switchMap, throwError} from 'rxjs'
import {UserService} from '../core/user/user.service'

@Injectable({providedIn: 'root'})
export class AuthService {
    private authenticated: boolean = false
    private httpClient = inject(HttpClient)
    private userService = inject(UserService)

    set accessToken(token: string|null) {
        if (!token) {
            localStorage.removeItem('accessToken')
            return
        }
        localStorage.setItem('accessToken', token)
    }

    get accessToken(): string {
        return localStorage.getItem('accessToken') ?? ''
    }

    get isAuthenticated(): boolean {
        return this.authenticated
    }

    signIn(credentials: {email: string; password: string}): Observable<any> {
        if (this.authenticated) {
            return throwError('User is already logged in.')
        }

        return this.httpClient.post('login', credentials).pipe(
            switchMap((response: any) => {
                // Store the access token in the local storage
                this.accessToken = response.accessToken

                // Set the authenticated flag to true
                this.authenticated = true

                // Store the user on the user service
                this.userService.user = response.user

                // Return a new observable with the response
                return of(response)
            })
        )
    }

    signUp(user: {name: string, email: string, password: string}): Observable<any> {
        return this.httpClient.post('register', user)
    }

    signOut(): Observable<any> {
        localStorage.removeItem('accessToken')
        this.authenticated = false

        return of(true)
    }
}
