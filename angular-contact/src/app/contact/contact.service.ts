import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactComponent } from './contact.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  showMessage(arg0: string) {
    throw new Error("Method not implemented.");
  }

  baseUrl = "http://localhost:3000/contact-us"

  constructor(private http: HttpClient) { }

  enviar(contact : any) {
    console.log("Serviço respondendo!", contact)
    this.http.post(this.baseUrl, contact).subscribe();
  }
}