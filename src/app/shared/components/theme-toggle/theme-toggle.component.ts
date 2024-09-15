import {Component, OnInit} from '@angular/core'
import {MatIconButton} from '@angular/material/button'
import {MatIcon} from '@angular/material/icon'

@Component({
    selector: 'app-theme-toggle',
    standalone: true,
    imports: [
        MatIconButton,
        MatIcon
    ],
    templateUrl: './theme-toggle.component.html',
    styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent implements OnInit {
    isDarkMode = false

    ngOnInit(): void {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
            this.isDarkMode = storedTheme === 'dark-theme'
        } else {
            this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        this.applyTheme()
    }

    toggleTheme(): void {
        this.isDarkMode = !this.isDarkMode
        this.applyTheme()
    }

    private applyTheme(): void {
        const themeClass = this.isDarkMode ? 'dark-theme' : 'light-theme'
        document.body.classList.remove('dark-theme', 'light-theme')
        document.body.classList.add(themeClass)
        localStorage.setItem('theme', themeClass)
    }

}
