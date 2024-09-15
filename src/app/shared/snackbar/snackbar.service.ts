import {Injectable} from '@angular/core'
import {MatSnackBar} from '@angular/material/snack-bar'
import {SnackbarComponent} from './snackbar.component'

@Injectable({providedIn: 'root'})
export class SnackbarService {
    constructor(private snackBar: MatSnackBar) {
    }

    private open(message: string, icon: string, background: string): void {
        this.snackBar.openFromComponent(SnackbarComponent, {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 5000,
            data: {message, icon, background}
        })
    }

    openSuccess(message: string): void {
        this.open(message, 'check_circle', 'bg-success')
    }

    openDanger(message: string): void {
        this.open(message, 'error', 'bg-danger')

    }

    openInfo(message: string): void {
        this.open(message, 'info', 'bg-primary')
    }

    openWarning(message: string): void {
        this.open(message, 'warning', 'bg-warning')
    }

}
