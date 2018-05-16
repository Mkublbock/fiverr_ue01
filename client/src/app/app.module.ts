import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent, AvailableDeviceComponent, DiagramComponent } from './components';
import { OverviewComponent } from './components/overview/overview.component';
import { OptionsComponent } from './components/options/options.component';
import { DiagramService } from './services';
import { AuthService } from './services/authservice';
import { DeviceService } from './services/device-service.service';
import { MaxValidator, MinValidator } from './validators';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth-guard.service';
import { DetailContinuousComponent } from './components/details/detail-continuous/detail-continuous.component';
import { DetailBooleanComponent } from './components/details/detail-boolean/detail-boolean.component';
import { DetailEnumerationComponent } from './components/details/detail-enumeration/detail-enumeration.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'options', component: OptionsComponent, canActivate: [AuthGuard] },
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
  { path: 'detailsenum/:index', component: DetailEnumerationComponent, canActivate: [AuthGuard] },
  { path: 'detailsbool/:index', component: DetailBooleanComponent, canActivate: [AuthGuard] },
  { path: 'detailscont/:index', component: DetailContinuousComponent, canActivate: [AuthGuard] },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: false }
    )
  ],
  declarations: [
    AppComponent,
    AvailableDeviceComponent,
    DiagramComponent,
    MaxValidator,
    MinValidator,
    OverviewComponent,
    OptionsComponent,
    HomeComponent,
    DetailContinuousComponent,
    DetailBooleanComponent,
    DetailEnumerationComponent,
  ],
  providers: [
    DiagramService, AuthService, AuthGuard, DeviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
