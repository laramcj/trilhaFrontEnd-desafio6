import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  contactForm: FormGroup;

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
    this.contactForm.reset();
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