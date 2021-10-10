import { Component, OnInit } from '@angular/core';
import { ProductserveService } from '../productserve.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
   products;
  constructor(private Service:ProductserveService ) { }

  ngOnInit(): void {
  this.Service.getProductlist().subscribe(data=>
 
    this.products=data
    
  );  

  }
  
}
