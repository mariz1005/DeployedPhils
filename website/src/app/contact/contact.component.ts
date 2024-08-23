import { Component } from '@angular/core';
import { EmailPipe } from "../email.pipe";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, EmailPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email: string = 'reception@havanadvisers.co.nz';

  userForm = new FormGroup({
    fullName : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    contact : new FormControl('', Validators.required),
    booking : new FormControl('', Validators.required),
    scheduleDate : new FormControl('', Validators.required),
    scheduleTime : new FormControl('', Validators.required),
    message : new FormControl('', Validators.required),
  });

  onSubmit(){
    this.userForm.reset();
    alert("Your form was submitted successfully!")
  }
}
