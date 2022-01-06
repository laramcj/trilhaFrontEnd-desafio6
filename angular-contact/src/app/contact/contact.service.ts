import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactComponent } from './contact.component';
import { Observable, of } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  showMessage(arg0: string) {
    throw new Error("Method not implemented.");
  }

  baseUrl = "http://localhost:3000/contact-us"

  constructor(private http: HttpClient) { }

  enviar(contact : any): Observable <Contact> {
    console.log("Serviço respondendo!", contact)
    return this.http.post<Contact>(this.baseUrl, contact);
  }
}