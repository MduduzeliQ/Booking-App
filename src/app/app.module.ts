import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {MainPage} from '../pages/main/main';
import {RegisterPage} from '../pages/register/register';
import {GalleryPage} from '../pages/gallery/gallery';
import {BookingPage} from '../pages/booking/booking';
import {MenuPage} from '../pages/menu/menu';
import {InformationPage} from '../pages/information/information';
import {ViewPage} from '../pages/view/view';
import {EditPage} from '../pages/edit/edit';
import {ForgotPage} from '../pages/forgot/forgot';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    RegisterPage,
    GalleryPage,
    BookingPage,
    MenuPage,
    InformationPage,
    ViewPage,
    EditPage,
    ForgotPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    RegisterPage,
    GalleryPage,
    BookingPage,
    MenuPage,
    InformationPage,
    ViewPage,
    EditPage,
    ForgotPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
