import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LyHammerGestureConfig, LyThemeModule, LY_THEME, LY_THEME_NAME, StyleRenderer, LyTheme2 } from '@alyle/ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MinimaLight } from '@alyle/ui/themes/minima';
import { NavBarComponent } from './components/navigation/nav-bar/nav-bar.component';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyIconModule } from '@alyle/ui/icon';
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyButtonModule } from '@alyle/ui/button';
import { LyMenuModule } from '@alyle/ui/menu';
import { LyCardModule } from '@alyle/ui/card';
import { LyGridModule } from '@alyle/ui/grid';
import { LyAvatarModule } from '@alyle/ui/avatar';
import { LyCommonModule } from '@alyle/ui';
import { LyCheckboxModule } from '@alyle/ui/checkbox';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserCardComponent } from './components/user/user-card/user-card.component';
import { RoomCardComponent } from './components/rooms/room-card/room-card.component';
import { HouseCardComponent } from './components/house-card/house-card.component';
import { ChoreCardComponent } from './components/chores/chore-card/chore-card.component';
import { ChoresPageComponent } from './components/chores/chores-page/chores-page.component';
import { NavMenuComponent } from './components/navigation/nav-menu/nav-menu.component';
import { LoginComponent } from './components/login/login/login.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { SplashPageComponent } from './components/splash-page/splash-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    UserCardComponent,
    RoomCardComponent,
    HouseCardComponent,
    ChoreCardComponent,
    ChoresPageComponent,
    NavMenuComponent,
    LoginComponent,
    SignUpComponent,
    SplashPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
    LyToolbarModule,
    LyIconModule,
    LyTypographyModule,
    LyButtonModule,
    LyMenuModule,
    LyCardModule,
    LyGridModule,
    LyAvatarModule,
    LyCommonModule,
    LyCheckboxModule
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig }, StyleRenderer, LyTheme2, { provide: LY_THEME_NAME, useValue: 'minima-light' }, { provide: LY_THEME, useClass: MinimaLight, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
