import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {AboutComponent} from './components/about/about.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SettingsComponent} from './components/settings/settings.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule} from "@angular/router";
import {ProfileComponent} from './components/profile/profile.component';
import {AuthGuard} from "./services/authguard/authguard.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    AboutComponent,
    DashboardComponent,
    SettingsComponent,
    FooterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      {path: 'about', component: AboutComponent},
      {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
      {path: '', component: HomepageComponent},
      {path: '**', redirectTo: ''}
    ]),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {
}
