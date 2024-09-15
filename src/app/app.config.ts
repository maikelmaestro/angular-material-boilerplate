import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core'
import {PreloadAllModules, provideRouter, withPreloading} from '@angular/router'

import {routes} from './app.routes'
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async'
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field'
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core'
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from '@angular/material-moment-adapter'
import {provideHttpClient} from '@angular/common/http'

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(
            routes,
            withPreloading(PreloadAllModules),
            // withInMemoryScrolling({scrollPositionRestoration: 'enabled'})
        ),
        provideAnimationsAsync(),
        {
            provide:
            MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                floatLabel: 'always',
                appearance: 'outline',
            },
        },
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
        },
        {
            provide: MAT_DATE_LOCALE,
            useValue: 'en-US',
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: {
                parse: {
                    dateInput: 'YYYY-MM-DD',
                },
                display: {
                    dateInput: 'YYYY-MM-DD',
                    monthYearLabel: 'LLL yyyy',
                    dateA11yLabel: 'DD',
                    monthYearA11yLabel: 'LLLL yyyy',
                },
            },
        },
        {
            provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
            useValue: {useUtc: true}
        },

    ]
}
