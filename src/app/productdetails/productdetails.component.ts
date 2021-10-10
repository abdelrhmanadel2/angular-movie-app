import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserveService } from '../productserve.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product;
  id;
  constructor(private Service:ProductserveService,private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.id=params['id'])
   }

  ngOnInit(): void {
    this.Service.getProduct(this.id).subscribe(data=>   
    this.product=data
      
    );  
  }

}
