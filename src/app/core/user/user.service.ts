import {HttpClient} from '@angular/common/http'
import {inject, Injectable} from '@angular/core'
import {Observable, ReplaySubject, tap} from 'rxjs'
import {IUser} from './user.types'

@Injectable({providedIn: 'root'})
export class UserService {
  private _httpClient = inject(HttpClient)
  private _user: ReplaySubject<IUser> = new ReplaySubject<IUser>(1)

  set user(value: IUser) {
    this._user.next(value)
  }

  get user$(): Observable<IUser> {
    return this._user.asObservable()
  }

  get(): Observable<IUser> {
    return this._httpClient.get<IUser>('user').pipe(
      tap((user) => {
        this._user.next(user)
      })
    )
  }
}
