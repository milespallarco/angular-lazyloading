import { NgModule } from '@angular/core';

import { PagesComponent } from './admin.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './admin-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const ADMIN_COMPONENTS = [
  AdminComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
  declarations: [
    ...ADMIN_COMPONENTS,
  ],
})
export class AdminModule {
}
