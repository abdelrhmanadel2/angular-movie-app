import { ProductserveService } from './../productserve.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private Service:ProductserveService ) { }
  items;
  itemsnumber;
  ngOnInit(): void {
  }
set incresecart(itemsnumber){

this.itemsnumber++;
}
get incresecart(){
  return this.itemsnumber;
}
}
