import { Component, OnInit, Injectable } from '@angular/core';
import { ServiceCartService } from '../service-cart.service';
import { Router } from '@angular/router';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

declare let paypal: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})

export class PaymentPage implements OnInit {

  constructor(private cartService: ServiceCartService,
              private router: Router, 
              private dialogs: Dialogs,
              private payPal: PayPal,
              ) { }

  returnCart = [];
  updatedProductArr = [];
  
  ngOnInit() {
    this.returnCart = this.cartService.getCart();
    this.updatedProductArr = this.cartService.getProducts(); // Updated Arr List
    
  }

  // addScript: boolean = false;
  // paypalLoad: boolean = true;
  
  finalAmount: number;

  // paypalConfig = {
  //   env: 'sandbox',
  //   client: {
  //     sandbox: 'AU1nnVbRvqQNVEmq0-LqzzI_Co9w-7mPvYu4htV8GjET7ieaBkUaK5IFPI5PNQ4QittVSavsjxcTNBrk'
  //   },
  //   commit: true,
  //   payment: (data, actions) => {
  //     return actions.payment.create({
  //       payment: {
  //         transactions: [
  //           { amount: { total: this.finalAmount, currency: 'SGD' } }
  //         ]
  //       }
  //     });
  //   },
  //   onAuthorize: (data, actions) => {
  //     return actions.payment.execute().then((payment) => {
  //       // Do something when payment is successful.
  //       this.router.navigate(['/tabs/confirmation-page']);
  //     })
  //   }
  // };


  // ngAfterViewChecked(): void {
  //   if (!this.addScript) {
  //     this.addPaypalScript().then(() => {
  //       paypal.Button.render(this.paypalConfig, '#paypal-button-container');
  //       this.paypalLoad = false;
  //     })
  //   }
  // }
  
  // addPaypalScript() {
  //   this.addScript = true;
  //   return new Promise((resolve, reject) => {
  //     let scripttagElement = document.createElement('script'); 
  //     scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
  //     scripttagElement.onload = resolve;
  //     document.body.appendChild(scripttagElement);
  //   })
  // }

  // finalTotal = 0;
  // getTotal() {
  //   for (var i = 0; i < this.returnCart.length; i++) {
  //     this.finalTotal += this.returnCart[i].price; // Total Amount
  //   }
  //   alert(this.finalTotal);
  // }

  total = 0;
  totalString: any;

  finalAmt = 0;

  getTotal() {
    
    this.finalAmt = 0;
    for (var i = 0; i < this.returnCart.length; i++) {
        this.finalAmt += this.returnCart[i].price; // Total Amount
    }
    document.getElementById("demo").innerHTML = 'Total Cost $' + this.finalAmt
  }

  pay(product) {

    this.total = 0;
    for (var i = 0; i < this.returnCart.length; i++) {
        this.total += this.returnCart[i].price; // Total Amount
        this.totalString = this.total.toString();
    }

    this.payPal.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: 'AU1nnVbRvqQNVEmq0-LqzzI_Co9w-7mPvYu4htV8GjET7ieaBkUaK5IFPI5PNQ4QittVSavsjxcTNBrk'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(this.totalString, 'SGD', 'Total', 'sale');
        
        this.payPal.renderSinglePaymentUI(payment).then(() => {
          // Successfully paid
          this.returnCart.splice(product)
          this.dialogs.alert('Your order has been confirmed!')
            .then(() => {
              console.log('Errors dismissed')
              // insert email function
              this.router.navigate(['/tabs/tab1'])
            }).catch(e => console.log('Error displaying dialog', e));

          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, () => {
          // Error or render dialog closed without being successful
        });
      }, () => {
        // Error in configuration
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
    });

  }
}
