import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/Models/Cart';
import { CartItem } from '../shared/Models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {
  cart!:Cart;
  constructor(private cartService: CartService) { 
    console.log('cart constructor::')
    this.setCart();
  }
  setCart(){
    this.cart = this.cartService.getCart();

  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

}
