import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marketingDigital';
  public HaMar  = new FormGroup({
    nom : new FormControl('' , [Validators.required]),
    email : new FormControl('', [Validators.required,Validators.email]),
    phone : new FormControl('', [Validators.required,Validators.email]),
    object : new FormControl('', [Validators.required,Validators.email]),
    message : new FormControl('', [Validators.required,Validators.email]),
  })
  constructor(){}
  Contact(){
    if(this.HaMar.valid){
      console.log(this.HaMar.value)
    }
    console.log(this.HaMar.value)
  }
}
