import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbSidebarModule
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';

import { ContactsComponent } from './contacts/contacts.component';
import { DashboardExpComponent } from './dashboard-exp.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TrafficChartComponent } from './traffic/traffic-chart.component';
import { UserActivityComponent } from './user-activity/user-activity.component';
import { SolarComponent } from './solar/solar.component';
import { SearchPatientsComponent } from './search-patients/search-patients.component';


@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbSidebarModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
  ],
  declarations: [
    ContactsComponent,
    DashboardExpComponent,
    TrafficComponent,
    TrafficChartComponent,
    UserActivityComponent,
    SolarComponent,
    SearchPatientsComponent
  ],
})
export class DashboardExpModule { }
