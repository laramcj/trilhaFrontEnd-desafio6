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

  contactForm: FormGroup;
  contact: any;
  contactService: any;

  ngOnInit(){

    this.contactForm = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'subject' : new FormControl(null, Validators.required),
      'message' : new FormControl(null, [Validators.required, Validators.minLength(10)] )
    })
      
  }

  clicksub() {
    console.log(this.contactForm.value);
    console.log(this.message.value);
    // this.contactForm.reset();

    const newContact: Contact = {
      id: 0,
      name: this.name.value,
      email: this.email.value,
      subject: this.subject.value,
      message: this.message.value
    }
    console.log(newContact);
    return

    const newContact2: Contact = { 'id': 1, 'name': "Nome de Teste da Silva", 'email': "beltrano@nttdata.com.br", 'message': "Teste de mensagem para o desafio"} as Contact;
    this.contactService
      .addContact(newContact)
      .subscribe(contact => this.contact.push(contact));
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get subject() {
    return this.contactForm.get('subject');
  }

  get message() {
    return this.contactForm.get('message');
  }

  

}