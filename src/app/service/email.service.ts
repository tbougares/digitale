import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private HTTP:HttpClient) { }

  EnvoyerEmail(email:any){
    this.HTTP.post("http://localhost:1000/Email/send-mail/",email).subscribe(rep=>{
    console.log(rep.valueOf())

        })
  }
  AjouterClient(client:any){
    this.HTTP.post("http://localhost:1000/Client/Createclient/",client).subscribe(rep=>{
    console.log(rep.valueOf())

        })
  }
}
