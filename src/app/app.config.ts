import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { provideRouter, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { Welcome1Component } from './welcome1/welcome1.component';
import { SharedModule } from './shared/shared.module';
import { UserListComponent } from './modules/user/user-list/user-list.component';
import { UserState } from './modules/user/store/user.state';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsRouterPluginModule, RouterStateSerializer } from '@ngxs/router-plugin';
import { BrowserModule } from '@angular/platform-browser';
import { CustomRouterStateSerializer } from './modules/router/store/custom-router-state-serializer';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { FormGroupDirective } from '@angular/forms';

registerLocaleData(zh);
const STATES = [
  UserState,
];
const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'welcome1', component: Welcome1Component},
  {
    path: 'user', children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: UserListComponent},
    ],
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(SharedModule),
    importProvidersFrom(NgxsModule.forRoot(STATES, {developmentMode: isDevMode()})),
    importProvidersFrom(NgxsStoragePluginModule.forRoot()),
    importProvidersFrom(NgxsFormPluginModule.forRoot()),
    importProvidersFrom(NgxsRouterPluginModule.forRoot()),
    {provide: NZ_I18N, useValue: zh_CN},
    {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer},
    FormGroupDirective,
  ],
};
