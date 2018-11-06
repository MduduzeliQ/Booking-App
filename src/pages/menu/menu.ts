import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var firebase;
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
itemlist = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
}
