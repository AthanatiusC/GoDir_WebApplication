import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerComponent } from '../pages/file-manager/file-manager.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { HomeComponent } from '../pages/home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatBottomSheetModule } from '@angular/material';
import { ConfirmLogoutComponent } from '../pages/confirm-logout/confirm-logout.component';

@NgModule({
  declarations: [
    ConfirmLogoutComponent,
    FileManagerComponent,
    SettingsComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatBottomSheetModule
  ]
})
export class DashboardModule { }
