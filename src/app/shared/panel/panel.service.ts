import {Injectable} from '@angular/core'
import {from, Subject} from 'rxjs'
import {Portal} from '@angular/cdk/portal'

@Injectable({
    providedIn: 'root'
})
export class PanelService {
    private panelPortal$ = new Subject<Portal<any>>()
    panelPortalOpened: boolean = false

    get panelPortal() {
        return from(this.panelPortal$)
    }

    closePanelPortal() {
        this.panelPortal$.next(null)
        this.panelPortalOpened = false
    }
}
