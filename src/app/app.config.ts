import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { provideRouter, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { Welcome1Component } from './welcome1/welcome1.component';
import { SharedModule } from './shared/shared.module';

registerLocaleData(zh);

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'welcome1', component: Welcome1Component},
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(SharedModule),
    {provide: NZ_I18N, useValue: zh_CN},
  ],
};
