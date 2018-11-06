import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { GalleryPage } from '../gallery/gallery';
import { ForgotPage } from '../forgot/forgot';

declare var firebase;

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  authenticate = firebase.auth();
Email;
Password;
validation;  
splash = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,public alertCtrl:AlertController,private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 5000);
  }
next(){
  this.navCtrl.push(RegisterPage);
}

login(){
  if (this.Email == undefined && this.Password == undefined){
    const alert = this.alertCtrl.create({
      title: 'Warning!',
      subTitle: 'Please provide your log in details to log in!',
      buttons: ['Ok']
    });
    alert.present();
  }
  else if (this.Email == undefined){
    const alert = this.alertCtrl.create({
      title: 'Warning!',
      subTitle: 'Email cannot be left out!',
      buttons: ['Ok']
    });
    alert.present();
  }else if (this.Password == undefined ){
    const alert = this.alertCtrl.create({
      title: 'Warning!',
      subTitle: 'Password cannot be left out!',
      buttons: ['Ok']
    });
    alert.present();
  }
  else{
firebase.auth().signInWithEmailAndPassword(this.Email, this.Password).then((data) => {
 const alert = this.alertCtrl.create({
  title: 'Welcome',
  message: 'You have successfully logged in',
  buttons: ['OK']
});
alert.present();
this.navCtrl.push(GalleryPage);
 },Error => {
  const alert = this.alertCtrl.create({
    title: 'Warning!',
    message: Error,
    buttons: ['OK']
  });
  alert.present();
 })
}
}


nexts(){
  this.navCtrl.push(ForgotPage);
}
forgotUserPassword(email:any){
  return this.authenticate.sendPasswordResetEmail(email);
}
showForgotPassword(){
  const prompt = this.alertCtrl.create({
    title: 'Enter Your Email',
    message: "A new password will be sent to your email",
    inputs: [
      {
        name: 'recoverEmail',
        placeholder: 'you@example.com'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Submit',
        handler: data => {

          const loader = this.loadingCtrl.create({
            content: "Please wait.. resetting your password",
            duration: 2000
          });
          loader.present();

          this.forgotUserPassword(data.recoverEmail).then(() =>{
            // add toast
            loader.dismiss().then(() => {
            //show pop up
            let alert = this.alertCtrl.create({
            title: 'Check your email',
            subTitle: 'Password reset succesful',
            buttons: ['OK']
            });
              alert.present();
            })
          },error =>{ 
            loader.dismiss().then(() => {
            let alert = this.alertCtrl.create({
            title: 'Error resseting password',
            subTitle:error.message,
            buttons: ['OK']
            });
            alert.present();
          })
          });
        }
      }
    ]
  });
  prompt.present();
  }
}

