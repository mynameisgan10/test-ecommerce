import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceCartService } from '../../service-cart.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.page.html',
  styleUrls: ['./category-details.page.scss'],
})
export class CategoryDetailsPage implements OnInit {

  data = [];
  myid = null;
  individualOne;

  arr = [];

  constructor(private activatedRoute: ActivatedRoute, private cartService: ServiceCartService) { }

  ngOnInit() {
    this.data = this.cartService.getProducts();    
    this.myid = +this.activatedRoute.snapshot.params['a']
    this.individualOne = this.cartService.getIndividual(this.myid); // getting individual product
    console.log('my cat_id is ' + this.myid);
    
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].cat_id === this.myid) {
        this.arr.push({
          cat_id: this.data[i].cat_id, 
          cat_name: this.data[i].cat_name, 
          product_id: this.data[i].product_id, 
          product_name: this.data[i].product_name, 
          price: this.data[i].price, 
          image: this.data[i].image, 
          description: this.data[i].description
        }) 
      }

    }
    console.log('my arr ' + JSON.stringify(this.arr));

  }

}
