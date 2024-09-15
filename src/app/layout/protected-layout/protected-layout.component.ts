import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core'
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet, Routes} from '@angular/router'
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout'
import {Observable, shareReplay} from 'rxjs'
import {map} from 'rxjs/operators'
import {routes} from '../../app.routes'
import {AsyncPipe, NgOptimizedImage} from '@angular/common'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon'
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu'
import {ThemeToggleComponent} from '../../shared/components/theme-toggle/theme-toggle.component'
import {CdkPortalOutlet} from '@angular/cdk/portal'
import {PanelService} from '../../shared/panel/panel.service'

@Component({
    selector: 'app-protected-layout',
    standalone: true,
    imports: [
        RouterOutlet,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        AsyncPipe,
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
        NgOptimizedImage,
        MatMenuTrigger,
        MatMenu,
        MatMenuItem,
        ThemeToggleComponent,
        CdkPortalOutlet,
    ],
    templateUrl: './protected-layout.component.html',
    styleUrl: './protected-layout.component.scss'
})
export class ProtectedLayoutComponent implements OnInit {
    private breakpointObserver = inject(BreakpointObserver)
    private router: Router = inject(Router)
    private cdr: ChangeDetectorRef = inject(ChangeDetectorRef)
    private route: ActivatedRoute = inject(ActivatedRoute)
    public panelService: PanelService = inject(PanelService)
    routes: Routes = routes[2]?.children?.filter(r => r.path && r.path !== '**')
    actualRoute: {title: string, icon: string}

    ngOnInit() {
        this.router.events.subscribe((event) => {
            const {data} = this.routes.find(r => r.path === this.route.snapshot.firstChild?.routeConfig?.path) as any
            this.actualRoute = {title: data.title, icon: data.icon}
        })
    }

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        )
}
