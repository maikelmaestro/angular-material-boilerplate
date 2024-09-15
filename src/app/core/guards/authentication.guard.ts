import {inject} from '@angular/core'
import {
  CanActivateChildFn,
  CanActivateFn,
  Router,
} from '@angular/router'
import {AuthService} from '../../auth/auth.service'

export const AuthenticationGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
  const router: Router = inject(Router)
  const isAuthenticated = inject(AuthService).isAuthenticated

  if (isAuthenticated) {
    return true
  }

  const redirectUrl: string = state.url === '/sign-out' ? '' : encodeURIComponent(state.url)
  router.navigate(['/sign-in'], {replaceUrl: true, queryParams: {redirectUrl}}).then()
  return false
}
