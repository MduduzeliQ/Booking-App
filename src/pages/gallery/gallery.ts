import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { BookingPage } from '../booking/booking';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }
add(){
  const actionSheet = this.actionSheetCtrl.create({
    title: 'Select options of your choice',
    buttons: [
      {
        text: 'Book Hotel',
        role: 'book',
        handler: () => {
          this.navCtrl.push(BookingPage);
          console.log('Book clicked');
        }
      },{
        text: 'History Booking',
        handler: () => {
          this.navCtrl.push(MenuPage);
          console.log('History clicked');
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}
}
