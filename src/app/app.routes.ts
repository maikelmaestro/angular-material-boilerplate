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
            {
                path: 'dashboard',
                title: 'Dashboard',
                data: {
                    icon: 'desktop_windows',
                    title: 'Dashboard'

                },
                loadChildren: () => import('./protected/dashboard/dashboard.routes')
            },
            {
                path: 'drag-drop',
                title: 'Drag and Drop',
                data: {
                    icon: 'drag_indicator',
                    title: 'Drag and Drop'

                },
                loadChildren: () => import('./protected/drag-drop/drag-drop.routes')
            },
            {
                path: 'table',
                title: 'Table',
                data: {
                    icon: 'table_chart',
                    title: 'Table'

                },
                loadChildren: () => import('./protected/table/table.routes')
            },
            {
                path:'address-form',
                title: 'Address Form',
                data: {
                    icon: 'home',
                    title: 'Address Form'
                },
                loadChildren: () => import('./protected/address-form/address-form.routes')
            },
            {
                path: 'tree',
                title: 'Tree',
                data: {
                    icon: 'account_tree',
                    title: 'Tree'

                },
                loadChildren: () => import('./protected/tree/tree.routes')
            },
            {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
        ]
    },
]
