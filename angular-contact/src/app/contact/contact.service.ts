import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {Contact} from './contact'
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  
  @Injectable()
  export class ContactService {
    contactUrl = 'http://localhost:3000/contact-us';  // URL to web api
    private handleError: HandleError;
  
    constructor(
      private http: HttpClient,
      httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('HeroesService');
    }
  
    /** POST: add a new hero to the database */
    addContact(contact: Contact): Observable<Contact> {
      return this.http.post<Contact>(this.contactUrl, contact, httpOptions)
        .pipe(
          catchError(this.handleError('addContact', contact))
        );
    }
  }
  
