import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router'

@Component({
  selector: 'app-protected-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './protected-layout.component.html',
  styleUrl: './protected-layout.component.scss'
})
export class ProtectedLayoutComponent {

}
