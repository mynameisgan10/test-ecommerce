import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PayPal } from '@ionic-native/paypal/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { GooglePlus } from '@ionic-native/google-plus/ngx'


import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
import { GoogleLoginPageModule } from './google-login/google-login.module'
import { EmailComposer } from '@ionic-native/email-composer/ngx';


import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

const firebaseConfig = {
    apiKey: "AIzaSyAjsCBxWdBrMKvuZVQA8NexI1STV5nRlY4",
    authDomain: "563718902980-dr3bkr7s6bgnh1pinvdia3j6uaqociqo.apps.googleusercontent.com",
    databaseURL: "https://sayocode-ionic.firebaseio.com",
    projectId: "sayocode-ionic",
    storageBucket: "sayocode-ionic.appspot.com",
    messagingSenderId: "563718902980",
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [IonicModule.forRoot(), BrowserModule, AppRoutingModule,  AngularFireAuthModule,
     AngularFireModule.initializeApp(firebaseConfig)],  // <-- firebase here

  providers: [
    EmailComposer,
    GooglePlus,
    StatusBar,
    SplashScreen,
    GoogleAnalytics,
    PayPal,
    FirebaseAuthentication,
    Dialogs,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]


})
export class AppModule {}
