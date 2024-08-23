import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts: Contact[]=[];

  constructor() { }

  setContacts(newContact: Contact[]){
    this.contacts = newContact;
  }

  getContact(index:number){
    return this.contacts.find((contact) => contact.id == index);
  }

  getContactsLength(){
    return this.contacts.length;
  }
}
