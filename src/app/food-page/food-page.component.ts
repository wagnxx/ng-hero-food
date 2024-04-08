import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../shared/Models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss'
})
export class FoodPageComponent {

  food!: Food
  constructor(
    private cartService: CartService,
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.food = this.foodService.getFoodById(Number(params['id']))
      }
    })

  }




  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
