import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  email: string = 'reception@havanadvisers.co.nz';

  signUpForm = new FormGroup({
    fullName : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
  });

  onSubmit(){
    this.signUpForm.reset();
    alert("You signed up successfully. Thank you.")
  }
}
