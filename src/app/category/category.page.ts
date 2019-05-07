import { Component, OnInit } from '@angular/core';
import { ServiceCartService } from '../service-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  constructor(private cartService: ServiceCartService, private router: Router) { }

  data = [];

  ngOnInit() {
    this.data = this.cartService.getProducts();
  }

  openCategory(a) {
    this.router.navigate(['/tabs/category', a]) // route to the cat_id, not the index of the array
  }

}
