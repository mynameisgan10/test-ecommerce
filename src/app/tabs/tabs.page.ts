import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCartService} from '../service-cart.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  returnCart = [];
  updatedProductArr = [];

  returnWishlist = [];
  
  constructor(
    private cartService: ServiceCartService,
    private router: Router) {}

    ngOnInit() {
      this.returnCart = this.cartService.getCart(); // Get Added Product
      this.updatedProductArr = this.cartService.getProducts(); // Updated Arr List

      this.returnWishlist = this.cartService.getWishlist();
    }

  openCart() {
    this.router.navigate(['tabs/tab3'])
  }
}
