import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { IconsProviderModule } from '../icons-provider.module';
import { RouterLink, RouterOutlet } from '@angular/router';


const THIRD_MODULES: any[] = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterOutlet,
  RouterLink,
];
const NG_ZORRO_MODULES: any[] = [
  NzLayoutModule,
  IconsProviderModule,
  NzMenuModule,
  NzGridModule,
  NzInputModule,
  NzButtonModule,
  NzFormModule,
  NzTableModule,
  NzDividerModule,
];
const COMPONENTS: any[] = [];
const DIRECTIVES: any[] = [];
const PIPES: any[] = [];

@NgModule({
  declarations: [
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  imports: [
    CommonModule,
    ...THIRD_MODULES,
    ...NG_ZORRO_MODULES,
  ],
  exports: [
    ...THIRD_MODULES,
    ...NG_ZORRO_MODULES,
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule {
}
