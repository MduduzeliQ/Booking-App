import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var firebase;
@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Forgot(){
    var auth = firebase.auth();
    var emailAddress = "";
    
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      console.log('Email sent')
    }).catch(function(error) {
  console.log('error appears')
    });
  }
}
