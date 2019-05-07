import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { GoogleLoginComponent } from './google-login.page';

const routes: Routes = [
  {
    path: '',
    component: GoogleLoginComponent
  }
];

  // Initialize Firebase
  // const config = {
  //   apiKey: "AIzaSyCyGEdbwKTkpDmxV96vxiYcXstunXOTQYc",
  //   authDomain: "sayocode-ecommerce.firebaseapp.com",
  //   databaseURL: "https://sayocode-ecommerce.firebaseio.com",
  //   projectId: "sayocode-ecommerce",
  //   storageBucket: "sayocode-ecommerce.appspot.com",
  //   messagingSenderId: "355274083537"
  // };
  // firebase.initializeApp(config)


@NgModule({
  declarations: [GoogleLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [GoogleLoginComponent]

})
export class GoogleLoginPageModule {}
