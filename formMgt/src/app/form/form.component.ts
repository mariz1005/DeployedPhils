import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../models/contact.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  data: Contact;
  editMode: boolean=false;
  editingId = new EventEmitter<number>();

  @Input() formData:any=[];
  @Output() onAdd=new EventEmitter();
  @Output() onUpdate=new EventEmitter();

  userForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });
  
  
  constructor(){
    this.data = {
      id :0,
      name: '',
      email: '',
      phone: ''
    }
  }

  onSubmit(){
    if(this.editMode){
      this.onUpdate.emit(this.userForm.value);
    }
    else{
      const min = Math.ceil(1);
      const max = Math.floor(1000);

      this.data = {
        id : Math.floor(Math.random() * (max - min + 1)) + min ,
        name: '',
        email: '',
        phone: '',
      }
      this.userForm.value.id = this.data.id
      this.onAdd.emit(this.userForm.value);
     
    }
    this.userForm.reset();
    this.editMode=false;
  }
  
}
