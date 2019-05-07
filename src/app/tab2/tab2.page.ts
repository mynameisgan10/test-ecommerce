import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { ServiceCartService } from '../service-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(public alertController: AlertController,
              private cartService: ServiceCartService,
              private navCtrl: NavController,
              private router: Router,
              private toastController: ToastController) {}

  returnCart = [];
  updatedProductArr = [];

  returnWishlist = [];

  ngOnInit() {
    this.returnCart = this.cartService.getCart(); // Get Added Product
    this.updatedProductArr = this.cartService.getProducts(); // Updated Arr List

    this.returnWishlist = this.cartService.getWishlist(); // Get Added Wishlist
  }

  async deleteWishlist(i) {
    let alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Do you want to remove from wishlist?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked')
          }
        },
        {
          text: 'OK',
          handler: () => {
            this.cartService.deleteWishlist(i);
            this.presentToast()
            console.log('OK clicked, product removed from wishlist');
            
          }
        }
      ]
    });
    await alert.present();

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Item removed from wishlist',
      duration: 500,
      showCloseButton: true
    });
    toast.present();
  }

  async addToCart(wishlist, i) {
    // let alert = await this.alertController.create({
    //   header: 'Confirmation',
    //   message: 'Do you want to add this product to cart?',
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       handler: () => {
    //         console.log('Cancel clicked')
    //       }
    //     },
    //     {
    //       text: 'OK',
    //       handler: () => {
    //           this.cartService.addProduct(wishlist);
    //           this.returnWishlist.splice(i, 1);
    //           console.log('OK clicked, product added to cart >> ' + wishlist.product_name);
              
    //       }
    //     }
    //   ]
    // });
    // await alert.present();

    this.cartService.addProduct(wishlist);
    this.returnWishlist.splice(i, 1);
    const toast = await this.toastController.create({
      message: 'Added to Cart',
      duration: 500,
      position: 'bottom',
      showCloseButton: true
    });
    toast.present();
  }

  openCart() {
    this.router.navigate(['tabs/tab3'])
  }

  // async onDelete() {
  //   const alert = await this.alertController.create({
  //     header: 'Delete this item?',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: (blah) => {
  //           console.log('Cancel Selected');
  //         }
  //       }, {
  //         text: 'Delete',
  //         handler: () => {
  //           console.log('Item deleted');
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  //}
  
}
