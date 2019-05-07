import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ServiceCartService } from '../service-cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  returnCart = [];
  updatedProductArr = [];

  returnWishlist = [];


  returnIndividual = [];

  ngOnInit() {

    // Add to Cart
    this.returnCart = this.cartService.getCart(); // Get Added Product
    this.updatedProductArr = this.cartService.getProducts(); // Updated Arr List

    // Add to Wishlist
    this.returnWishlist = this.cartService.getWishlist(); // Get Added Wishlist

  }

  galleryType = 'regular';
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
              private router: Router,
              private newRoute: ActivatedRoute,
              private cartService: ServiceCartService) { }

  // async doConfirm(product) {
  //   let alert = await this.alertCtrl.create({
  //     header: 'Confirmation',
  //     message: 'Do you want to add this product to cart?',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'OK',
  //         handler: () => {
  //             this.cartService.addProduct(product);
  //             console.log('OK clicked, product added >> ' + product.product_name);
  //             console.log('returnCart Arr is ' + JSON.stringify(this.returnCart));
  //             console.log('invetory has ' + JSON.stringify(this.updatedProductArr));
          
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }


  // async addToWishlist(product) {
  //   let alert = await this.alertCtrl.create({
  //     header: 'Confirmation',
  //     message: 'Do you want to add this product to wishlist?',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'OK',
  //         handler: () => {
  //             this.cartService.addWishlist(product);
  //             console.log('OK clicked, product added to wishlist >> ' + product.product_name);
  //             console.log('returnWishlist Arr is ' + JSON.stringify(this.returnWishlist));
          
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  openDetails(b) {
    this.router.navigate(['/tabs/home', b]) // route to product_id
  }

  
  isItemAvailable = false; // initialize the items with false

  initializeItems(){ 
      this.updatedProductArr = this.cartService.getProducts();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.isItemAvailable = true;
      this.updatedProductArr = this.updatedProductArr.filter((product) => {
        return (product.product_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
