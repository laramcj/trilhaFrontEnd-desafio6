import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Contact } from "./contact";
import { ContactService } from "./contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  contact = new FormGroup({
    name : new FormControl(null, Validators.required),
    email : new FormControl(null, [Validators.required, Validators.email]),
    subject : new FormControl(null, Validators.required),
    message : new FormControl(null, [Validators.required, Validators.minLength(10)] )
  });

  constructor(private http: HttpClient,
    private service: ContactService) { }



  ngOnInit(): void{      
  }

  

  onSubmit() {
    console.log(this.contact.value);
    this.service.enviar(this.contact.value).subscribe({
      next:(response:Contact) => {
        console.log(response);
        this.contact.reset();
      },
      error:(error:any) => {
        console.error(error)
      }
    });
  }

  

  get name() {
    return this.contact.get('name');
  }

  get email() {
    return this.contact.get('email');
  }

  get subject() {
    return this.contact.get('subject');
  }

  get message() {
    return this.contact.get('message');
  }

  

}