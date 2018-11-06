import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { MainPage } from '../main/main';

declare var firebase;
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
Email;
Password;
validation;
splash = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private alertCtrl:AlertController) {
  }

signup(){
  if ( this.Email == undefined && this.Password == undefined ){
    const alert = this.alertCtrl.create({
      title: 'Warning',
      subTitle: ' Please provide your full details to register!',
      buttons: ['OK']
    });
    alert.present();
    
    } else if (this.Email == undefined){
    const alert = this.alertCtrl.create({
      title: 'Warning',
      subTitle: 'Email cannot be left out',
      buttons: ['OK']
    });
    alert.present();
    } else if (this.Password == undefined){
    const alert = this.alertCtrl.create({
      title: 'Warning',
      subTitle: 'Password cannot be left out',
      buttons: ['OK']
    });
    alert.present();
    }
    else {
    firebase.auth().createUserWithEmailAndPassword(this.Email, this.Password).then(() => {
       const alert = this.alertCtrl.create({
         title: 'Welcome',
         subTitle: 'You have successfully Registared',
         buttons: ['OK']
       });
       alert.present();
      },Error =>{
        const alert = this.alertCtrl.create({
          title: 'Warning',
          subTitle: Error,
          buttons: ['OK']
        });
        alert.present();
      })
    }

}
next(){
 
this.navCtrl.push(MainPage);
}
}
