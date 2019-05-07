import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceCartService {

  constructor() { }

  private data = [
                  {
                    cat_id: 5, cat_name: 'Drinks', product_id: 3, product_name: 'Café Latte', price: 5, 
                    image: 'assets/Asset 2.svg', description: 'A latte is a coffee drink made with espresso and steamed milk. The term as used in English is a shortened form of the Italian caffè latte, caffelatte or caffellatte, which means "milk coffee".'
                  },
                  {
                    cat_id: 5, cat_name: 'Drinks', product_id: 4, product_name: 'Flat White', price: 5, 
                    image: 'assets/Asset 3.svg', description: 'A flat white is a coffee drink consisting of espresso with microfoam, steamed milk with small, fine bubbles and a glossy or velvety consistency).'
                  },
                  {
                    cat_id: 5, cat_name: 'Drinks', product_id: 6, product_name: 'Café Mocha', price: 6,
                    image: 'assets/Asset 5.svg', description: 'A caffè mocha, also called mocaccino, is a chocolate-flavored variant of a caffè latte. Other commonly used spellings are mochaccino and also mochachino.'
                  },
                  {
                    cat_id: 5, cat_name: 'Drinks', product_id: 5, product_name: 'Piccolo Latte', price: 4.5, 
                    image: 'assets/Asset 4.svg', description: 'Traditionally, a Piccolo Latte is a ristretto shot (15 – 20 ml) topped with warm, silky milk served in a 100 ml small latte glass. Basically, a baby latte, as the Italian pronunciation suggests.'
                  },
                  {cat_id: 0, cat_name: 'Clothings', product_id: 0, product_name: 'Shirt A', price: 25.90, 
                   image: 'assets/asd.jpg'
                  },
                  {cat_id: 4, cat_name: 'Accessories', product_id: 1, product_name: 'Hat A', price: 21.90,
                   image: 'assets/asd.jpg'
                  },
                  {cat_id: 1, cat_name: 'Shoes', product_id: 22, product_name: 'Shoe A', price: 22.90, 
                    image: 'assets/cp.png'
                  },
                  {cat_id: 3, cat_name: 'Watches', product_id: 25, product_name: 'Watch A', price: 22.90, 
                  image: 'assets/latter-rain.jpg'}
                  ]
  
  private cart = [];

  // find Category individually

  getIndividual(myid) {
    return this.data.find(e => e.cat_id === myid)
  }

  // find Product individually
  getIndividualDetails(newID) {
    return this.data.find(e => e.product_id === newID)
  }

  // Add to Cart

  getProducts() {
    return this.data // Return Updated Data List Arr
  }

  getCart() {
    return this.cart // Return Cart
  }

  addProduct(individualProduct) {
    this.cart.push(individualProduct) // Add to Cart
  }

  deleteCart(i) {
    this.cart.splice(i, 1);
  }

  
  // Add to Wishlist

  wishlist = [];

  getWishlist() {
    return this.wishlist
  }

  addWishlist(individualProduct) {
    this.wishlist.push(individualProduct);
  }

  deleteWishlist(i) {
    this.wishlist.splice(i, 1);
  }


 

}
