import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AuthService } from '../auth.service';
    import { FileManagerComponent } from '../pages/file-manager/file-manager.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { DashboardComponent } from './dashboard.component';
import { DataCenterComponent } from '../pages/data-center/data-center.component';

const routes: Routes = [
    {
        path: "Dashboard"   , component: DashboardComponent, canActivate: [AuthService], children: [
            { path: "FileManager", component: FileManagerComponent, canActivate:[AuthService]},
            { path: "DataCenter", component: DataCenterComponent, canActivate:[AuthService]},
            { path: "Settings", component: SettingsComponent, canActivate:[AuthService]},
            { path: "Profile", component:ProfileComponent, canActivate:[AuthService]},
            { path: "Home", component:HomeComponent, canActivate:[AuthService]},
            { path: "", component:HomeComponent, canActivate:[AuthService]}
    ]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }