import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { InformationPage } from '../information/information';
import { Observable } from 'rxjs/observable';

declare var firebase;
@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  name;
  contact;
  itemlist = [];
  item: Observable<any[]>;
  database;
  itemref$: any;
  Datein;
  Dateout;
  guestno;
  childno;
  roomno;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController ) {
    var user = firebase.auth().currentUser;
    firebase.database().ref('hotel/'  + user.uid).on('value', (data:any) => {
      var name = data.val();
      var contact = data.val();
      var Datein = data.val();
      var Dateout = data.val();
      var guestno = data.val();
      var childno = data.val();
      var roomno = data.val();
  
  
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
  adding(name,contact,Datein,Dateout,guestno,childno,roomno){
    var user = firebase.auth().currentUser;
  this.itemref$ = firebase.database().ref('hotel/' + user.uid).push({
    name,
    contact,
    Datein,
    Dateout,
    guestno,
    childno,
    roomno
  });
  }
  Add(){
    if (this.name == undefined && this.contact == undefined && this.Datein == undefined &&  this.Dateout == undefined && this.guestno == undefined && this.childno == undefined && this.roomno == undefined ){
      const alert = this.alertCtrl.create({
        title: 'No input found',
        subTitle: 'Please fill in your details to book!',
        buttons: ['OK']
      });
      alert.present();
    }else{
      this.itemlist = [];
    this.adding(this.name,this.contact,this.Datein, this.Dateout,this.guestno,this.childno,this.roomno);
   this.navCtrl.push(InformationPage);
    console.log(this.adding);
    }
  }
}
