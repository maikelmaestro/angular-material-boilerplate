import {Component, OnInit} from '@angular/core'
import {MatIconButton} from '@angular/material/button'
import {MatIcon} from '@angular/material/icon'

export enum Theme {
    Dark = 'dark-theme',
    Light = 'light-theme'
}

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
            this.isDarkMode = storedTheme === Theme.Dark
        } else {
            this.isDarkMode = !window.matchMedia('(prefers-color-scheme: light)').matches
        }
        this.applyTheme()
    }

    toggleTheme(): void {
        this.isDarkMode = !this.isDarkMode
        this.applyTheme()
    }

    private applyTheme(): void {
        const themeClass = this.isDarkMode ? Theme.Dark : Theme.Light
        document.body.classList.remove(Theme.Dark, Theme.Light)
        document.body.classList.add(themeClass)
        localStorage.setItem('theme', themeClass)
    }
}
