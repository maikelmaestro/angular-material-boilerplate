import {Component, Inject} from '@angular/core'
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar'
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
    standalone: true,
    imports: [MatIcon]
})
export class SnackbarComponent {
    constructor(
        @Inject(MAT_SNACK_BAR_DATA) public data: any,
        public snackBarRef: MatSnackBarRef<SnackbarComponent>
    ) {}
}
