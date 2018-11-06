import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { EditPage } from '../edit/edit';

declare var firebase;
@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  database = firebase.database();
  authenticate = firebase.auth();
itemlist = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:  AlertController) {
    var user = firebase.auth().currentUser;
    firebase.database().ref('hotel/'  + user.uid).on('value', (data:any) => {
      var name = data.val();
      console.log(name);
      var contact = data.val();
      console.log(contact);
      var Datein = data.val();
      console.log(Datein);
      var Dateout = data.val();
      console.log(Dateout);
      var guestno = data.val();
      console.log(guestno);
      var childno = data.val();
      console.log(childno);
      var roomno = data.val();
      console.log(roomno);
  
      var keys = Object.keys(name);
     
  for (var i = 0; i < keys.length; i++){
    var k = keys[i];
  
    let obj= {
    item:name[k].name,
    item1:contact[k].contact,
    item2:Datein[k].Datein,
    item3:Dateout[k].Dateout,
    item4:guestno[k].guestno,
    item5:childno[k].childno,
    item6:roomno[k].roomno,
    key: k
    }
    this.itemlist.push(obj);
    console.log(this.itemlist);
  }
    });
  }
  Delete(i){
    alert(i)
    this.itemlist = [];
    var user = firebase.auth().currentUser;
    var firebaseRef = firebase.database().ref('hotel/' + user.uid).child(i).remove();
    console.log('Deleted')
  }
  Edit(){
    this.navCtrl.push(EditPage);
  }
  logout(){
    const confirm = this.alertCtrl.create({
      title: 'Log Out',
      message: 'You are about to be logged out!',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            this.authenticate.signOut();
            this.navCtrl.push(MainPage);
          }
        }
      ]
    });
    confirm.present();
  }
  }
  
