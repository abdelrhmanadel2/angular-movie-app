import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductserveService {

  constructor(private HttpClient:HttpClient ) { }
  getProductlist(){
    return this.HttpClient.get('https://fakestoreapi.com/products')
  }
  getProduct(id){
    return this.HttpClient.get(`https://fakestoreapi.com/products/${id}`)
  }
}
