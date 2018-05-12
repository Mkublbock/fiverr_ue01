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

const appRoutes: Routes = [
  { path: 'options', component: OptionsComponent },
  { path: 'overview', component: OverviewComponent },
  {
    path: '',
    redirectTo: '/',
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
    OptionsComponent
  ],
  providers: [
    DiagramService, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
