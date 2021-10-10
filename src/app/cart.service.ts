import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  private messageSource = new BehaviorSubject(0); 
  currentMessage = this.messageSource.asObservable();
   cartitems=[];

  itemsnumber=0;
  ngOnInit(): void {
  }
 incresecart(){
   this.itemsnumber++;
this.messageSource.next(this.itemsnumber)

}
get cart(){
  return this.itemsnumber;
}


}
