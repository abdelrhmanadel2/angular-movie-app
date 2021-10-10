import { CartService } from './../cart.service';
import { ProductserveService } from './../productserve.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() product;
number=0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    console.log(this.product)
  }
  addtocart(){
    this.number++;
    this.cartService.incresecart();
    console.log( this.cartService.cart);
  }
}
