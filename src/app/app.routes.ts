import {Routes} from '@angular/router'
import {AuthLayoutComponent} from './layout/auth-layout/auth-layout.component'
import {ProtectedLayoutComponent} from './layout/protected-layout/protected-layout.component'
import {AuthenticationGuard} from './core/guards/authentication.guard'

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {path: 'sign-in', loadChildren: () => import('./auth/sign-in/sign-in.routes')},
            {path: 'sign-up', loadChildren: () => import('./auth/sign-up/sign-up.routes')}
        ]
    },
    {
        path: '',
        component: ProtectedLayoutComponent,
        // canActivate: [AuthenticationGuard],
        children: [
            {path: 'dashboard', loadChildren: () => import('./protected/dashboard/dashboard.routes')},
            {path: 'drag-drop', loadChildren: () => import('./protected/drag-drop/drag-drop.routes')},
            {path: 'table', loadChildren: () => import('./protected/table/table.routes')},
            {path: 'tree', loadChildren: () => import('./protected/tree/tree.routes')},
            {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
        ]
    },
]
