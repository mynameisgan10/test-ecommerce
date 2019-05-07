import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/Observable';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.page.html',
  styleUrls: ['./google-login.page.scss'],
})

export class GoogleLoginComponent {
  
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, 
    private gplus: GooglePlus,
    private firebaseAuthentication: FirebaseAuthentication,
    private platform: Platform,
    private router: Router,) { 
    this.user = this.afAuth.authState;
    }

    // registerAcc() {
    //   this.firebaseAuthentication.createUserWithEmailAndPassword('test@gmail.com', '123')
    //   .then((res: any) => console.log(res))
    //   .catch((error: any) => console.error(error));
    // }

    googleLogin(){
      if(this.platform.is('cordova')){
        this.nativeGoogleLogin();

      }

      else if (this.platform.is('ios')) {
        this.nativeGoogleLogin();
      }

      else if (this.platform.is('android')) {
        this.nativeGoogleLogin();
      }
      
      else if (this.platform.is('desktop')) {
        this.webGoogleLogin();
      }

      else {
        this.webGoogleLogin()
      }
    }

    async nativeGoogleLogin(): Promise<firebase.User>{
    try{
      const gplusUser = await this.gplus.login({
        'webClientId' : '563718902980-u9oskt1msilo11ur30pgmf9fhvpj0au2.apps.googleusercontent.com',
        'offline' : true,
        'scopes' : 'profile email'
      })
      return await this.afAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken) 
      )
    }catch(err){
      console.log(err);
    }finally {
      this.router.navigate(['/tabs/tab1'])
    }

    }
    async webGoogleLogin(): Promise<void>{
      try{
        const provider = new firebase.auth.GoogleAuthProvider();
        const credential = await this.afAuth.auth.signInWithPopup(provider);

      }catch(err){
        console.log(err);
      }
    }
    
    
    signOut(){
      this.afAuth.auth.signOut();
      if(this.platform.is('cordova')){
        this.gplus.logout();
      }

      else if (this.platform.is('cordova')) {
        this.gplus.logout();
      }

  } 
}

