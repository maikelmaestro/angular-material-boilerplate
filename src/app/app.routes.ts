import {Routes} from '@angular/router'
import {ProtectedLayoutComponent} from './layout/protected-layout/protected-layout.component'

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
    {
        path: '',
        component: ProtectedLayoutComponent,
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
