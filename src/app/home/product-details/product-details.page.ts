import { Component, OnInit } from '@angular/core';
import { ServiceCartService } from '../../service-cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  constructor(private cartService: ServiceCartService, private activatedRoute: ActivatedRoute,
    public alertCtrl: AlertController, private navCtrl: NavController, 
    private toastController: ToastController, private dialogs: Dialogs, private router: Router) { }

  data = [];
  newID = null;
  individualProduct;

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
        
    this.data = this.cartService.getProducts();    
    this.newID = +this.activatedRoute.snapshot.params['b']
    this.individualProduct = this.cartService.getIndividualDetails(this.newID);
    console.log('my product_id is ' + this.newID);
  }


    async doConfirm(individualProduct) {
    // let alert = await this.alertCtrl.create({
    //   header: 'Confirmation',
    //   message: 'Do you want to add this product to cart?',
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       handler: () => {
    //         console.log('Cancel clicked');
    //       }
    //     },
    //     {
    //       text: 'OK',
    //       handler: () => {
    //           this.cartService.addProduct(individualProduct);
    //           //this.router.navigate(['/tabs/home'])
    //           this.navCtrl.navigateBack(['/tabs/home'])

    //           console.log('OK clicked, product added >> ' + this.individualProduct.product_name);
    //           console.log('returnCart Arr is ' + JSON.stringify(this.returnCart));
    //           console.log('invetory has ' + JSON.stringify(this.updatedProductArr));
          
    //       }
    //     }
    //   ]
    // });
    // await alert.present();


      this.cartService.addProduct(individualProduct);
        
      const toast = await this.toastController.create({
        message: 'Added to cart',
        duration: 500,
        position: 'bottom',
        showCloseButton: true
      });
      toast.present();
    

  }



  // Wishlist
  async addToWishlist(individualProduct) {
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
  //             this.cartService.addWishlist(individualProduct);
  //             //this.router.navigate(['/tabs/home'])
  //             this.navCtrl.navigateBack(['/tabs/home'])

  //             console.log('OK clicked, product added to wishlist >> ' + this.individualProduct.product_name);
  //             console.log('returnWishlist Arr is ' + JSON.stringify(this.returnWishlist));
          
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  
  this.cartService.addWishlist(individualProduct);
        
  const toast = await this.toastController.create({
    message: 'Added to wishlist',
    duration: 500,
    position: 'bottom',
    showCloseButton: true
  });
  toast.present();


    }

  


}
