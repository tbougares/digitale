import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';
import { EmailService } from './service/email.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marketingDigital';
  email:any
  public HaMar  = new FormGroup({
    nom : new FormControl('' , [Validators.required]),
    email : new FormControl('', [Validators.required,Validators.email]),
    phone : new FormControl('', [Validators.required,Validators.email]),
    object : new FormControl('', [Validators.required,Validators.email]),
    message : new FormControl('', [Validators.required,Validators.email]),
  })
  constructor(private EmailService:EmailService){}
  Contact(){

      console.log(this.HaMar.value)
      this.email=this.HaMar.value.email
      console.log(this.email)
      //console.log(this.email)
      console.log(this.HaMar.value)

      // this.EmailService.AjouterClient(this.HaMar.value)
      //this.EmailService.EnvoyerEmail(this.HaMar.value)



  }
  countryChange(country: any) {
  }
  telInputObject(obj:any) {
    console.log(obj);
    obj.setCountry('in');
  }
}
