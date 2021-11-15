import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoresPageComponent } from './components/chores/chores-page/chores-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login/login.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { RoomPageComponent } from './components/rooms/room-page/room-page.component';
import { SplashPageComponent } from './components/splash-page/splash-page.component';
import { UserPageComponent } from './components/user/user-page/user-page.component';

// @TODO Add routing guards to all closed components
const routes: Routes = [
  { path: '', component: SplashPageComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'rooms', component: RoomPageComponent },
  { path: 'chores', component: ChoresPageComponent },
  { path: 'user', component: UserPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
