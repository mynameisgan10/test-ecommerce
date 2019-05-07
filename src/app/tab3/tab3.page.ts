import { Component, OnInit } from '@angular/core';
import { ServiceCartService } from '../service-cart.service'
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  returnCart = [];
  returnWishlist = [];

  constructor(private cartService: ServiceCartService,
              public alertController: AlertController,
              private toastController: ToastController,
              private router: Router,
              private emailComposer: EmailComposer) {
  }

  ngOnInit() {
    this.returnCart = this.cartService.getCart();
    this.returnWishlist = this.cartService.getWishlist();
  }


   sendEmail(){
    let email = {
      to: 'sayocodecompany@gmail.com',
      cc: '',
      bcc: [''],
      attachments: [
      ],
      subject: 'HEY',
      body: 'How are you? Nice greetings from Xavier',
      isHtml: true
    }
    
    // this.emailComposer.isAvailable().then((available: boolean) =>{
    //   if(available) {
    //     //Now we know we can send
    //     this.emailComposer.open(email);
    //   }
    //  });

     this.emailComposer.open(email);

    // Send a text message using default options
    // this.emailComposer.open(email);
  }

  
  async deleteFromCart(i) {
    let alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Do you want to remove this product from cart?',
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
            this.cartService.deleteCart(i);
            this.presentToast()
            console.log('OK clicked, product removed from cart');
              
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Item removed from cart',
      duration: 500,
      showCloseButton: true
    });
    toast.present();
  }

  checkOut(product, i) {
    this.router.navigate(['/tabs/payment']);
    // alert('this product is ' + JSON.stringify(product));
  }
}

// test branch
