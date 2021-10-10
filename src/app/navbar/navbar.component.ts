import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartnum;
  constructor(private cartService:CartService) { 
    cartService.currentMessage.subscribe(data=>this.cartnum=data);
  }

  ngOnInit(): void {
  }

}
