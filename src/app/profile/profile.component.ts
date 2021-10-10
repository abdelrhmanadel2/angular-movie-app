import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editprofile:FormGroup;
  type="password";
  constructor(private FormBuilder:FormBuilder) {
    this.editprofile=this.FormBuilder.group({
      email:['',[Validators.required,Validators.pattern(/\S+@\S+\.\S+/)]],
      username:['',[Validators.required,Validators.pattern(/^\S*$/)]],
      password:['',[Validators.required,Validators.minLength(8)]],
    })
   }

  ngOnInit(): void {
  }
  get formcontols(){
    return this.editprofile.controls;
  }
  showpassword(){
    if(this.type==='password'){
      this.type='text'
    }
    else if(this.type==='text'){
      this.type='password'
    }

  }
  onSubmit(){
    console.log(this.editprofile)
  }
}
