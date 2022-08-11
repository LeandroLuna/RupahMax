// Rupah
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
} from './utils';
import { UserData } from './dataModels/users';
import { ElectricityData } from './dataModels/electricity';
import { SmartTableData } from './dataModels/smart-table';
import { UserActivityData } from './dataModels/user-activity';
import { OrdersChartData } from './dataModels/orders-chart';
import { ProfitChartData } from './dataModels/profit-chart';
import { TrafficListData } from './dataModels/traffic-list';
import { EarningData } from './dataModels/earning';
import { OrdersProfitChartData } from './dataModels/orders-profit-chart';
import { TrafficBarData } from './dataModels/traffic-bar';
import { ProfitBarAnimationChartData } from './dataModels/profit-bar-animation-chart';
import { TemperatureHumidityData } from './dataModels/temperature-humidity';
import { SolarData } from './dataModels/solar';
import { TrafficChartData } from './dataModels/traffic-chart';
import { StatsBarData } from './dataModels/stats-bar';
import { CountryOrderData } from './dataModels/country-order';
import { StatsProgressBarData } from './dataModels/stats-progress-bar';
import { VisitorsAnalyticsData } from './dataModels/visitors-analytics';
import { SecurityCamerasData } from './dataModels/security-cameras';

import { UserService } from './mockData/users.service';
import { ElectricityService } from './mockData/electricity.service';
import { SmartTableService } from './mockData/smart-table.service';
import { UserActivityService } from './mockData/user-activity.service';
import { OrdersChartService } from './mockData/orders-chart.service';
import { ProfitChartService } from './mockData/profit-chart.service';
import { TrafficListService } from './mockData/traffic-list.service';
import { EarningService } from './mockData/earning.service';
import { OrdersProfitChartService } from './mockData/orders-profit-chart.service';
import { TrafficBarService } from './mockData/traffic-bar.service';
import { ProfitBarAnimationChartService } from './mockData/profit-bar-animation-chart.service';
import { TemperatureHumidityService } from './mockData/temperature-humidity.service';
import { SolarService } from './mockData/solar.service';
import { TrafficChartService } from './mockData/traffic-chart.service';
import { StatsBarService } from './mockData/stats-bar.service';
import { CountryOrderService } from './mockData/country-order.service';
import { StatsProgressBarService } from './mockData/stats-progress-bar.service';
import { VisitorsAnalyticsService } from './mockData/visitors-analytics.service';
import { SecurityCamerasService } from './mockData/security-cameras.service';
import { MockDataModule } from './mockData/mock-data.module';

const socialLinks = [
  {
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'twitter',
  },
];

const DATA_SERVICES = [
  { provide: UserData, useClass: UserService },
  { provide: ElectricityData, useClass: ElectricityService },
  { provide: SmartTableData, useClass: SmartTableService },
  { provide: UserActivityData, useClass: UserActivityService },
  { provide: OrdersChartData, useClass: OrdersChartService },
  { provide: ProfitChartData, useClass: ProfitChartService },
  { provide: TrafficListData, useClass: TrafficListService },
  { provide: EarningData, useClass: EarningService },
  { provide: OrdersProfitChartData, useClass: OrdersProfitChartService },
  { provide: TrafficBarData, useClass: TrafficBarService },
  { provide: ProfitBarAnimationChartData, useClass: ProfitBarAnimationChartService },
  { provide: TemperatureHumidityData, useClass: TemperatureHumidityService },
  { provide: SolarData, useClass: SolarService },
  { provide: TrafficChartData, useClass: TrafficChartService },
  { provide: StatsBarData, useClass: StatsBarService },
  { provide: CountryOrderData, useClass: CountryOrderService },
  { provide: StatsProgressBarData, useClass: StatsProgressBarService },
  { provide: VisitorsAnalyticsData, useClass: VisitorsAnalyticsService },
  { provide: SecurityCamerasData, useClass: SecurityCamerasService },
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  ...NbAuthModule.forRoot({

    strategies: [
      NbDummyAuthStrategy.setup({
        name: 'email',
        delay: 3000,
      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModules {
  constructor(@Optional() @SkipSelf() parentModule: CoreModules) {
    throwIfAlreadyLoaded(parentModule, 'CoreModules');
  }

  static forRoot(): ModuleWithProviders<CoreModules> {
    return {
      ngModule: CoreModules,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
