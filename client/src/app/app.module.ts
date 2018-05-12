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
import { MaxValidator, MinValidator } from './validators';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {AuthGuard} from "./services/auth-guard.service";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'options', component: OptionsComponent, canActivate: [AuthGuard] },
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
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
    HomeComponent
  ],
  providers: [
    DiagramService, AuthService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
