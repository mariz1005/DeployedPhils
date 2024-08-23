import { Component, OnInit, ViewChild } from '@angular/core';
import { FormComponent } from "../form/form.component";
import { Contact } from '../models/contact.model';
import { UrlService } from '../services/url.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormComponent, CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  users: Contact [] = [];

  constructor(private route:ActivatedRoute, private urlService:UrlService, private router: Router, private contactService:ContactsService){}

  @ViewChild(FormComponent)
  formComp: FormComponent = new FormComponent();

  ngOnInit(): void {
   this.getData();
  }

  getData(){
    // this.urlService.getInfo().subscribe((data : Contact[]) => {
    //   this.users = data;
    //   this.contactService.setContacts(data);
    // });
    this.urlService.getInfo().subscribe({
      next: (data: Contact[]) => {
        this.users = data;
        this.contactService.setContacts(data);
      },
      error: (err) => {
        console.error('Error fetching contacts', err);
      }
    });
  }

  public removeUser(id:number){
    const realIndex = this.users.findIndex((el) => el.id === id);
    this.urlService.deleteInfo(id).subscribe(() => this.users.splice(realIndex, 1))
  }

  addUser(event: Contact){
    this.users.push(event)
  }

 public editUser(user:Contact, i:number){
    this.formComp.userForm.setValue({
      id:i,
      name:user.name,
      email:user.email,
      phone: user.phone
    });
    this.formComp.editingId.next(i);
    this.formComp.editMode=true;
  }

  updateUser(event:Contact){
    const i = this.users.findIndex((el) => el.id === event.id);
    this.users[i] = event;
    this.urlService.updateInfo(event.id,event).subscribe();
  }

}
