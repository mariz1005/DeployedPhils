import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UrlService } from '../services/url.service';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-view-list',
  standalone: true,
  imports: [],
  templateUrl: './view-list.component.html',
  styleUrl: './view-list.component.scss'
})
export class ViewListComponent implements OnInit {

  contact?: Contact;
  id?:number;


  constructor(private route:ActivatedRoute, private urlService:UrlService, private router: Router, private contactService:ContactsService){

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id =+ params['id'];
      this.contact = this.contactService.getContact(this.id);
    });
  }

  getBack(){
    this.router.navigate(['../'], { relativeTo: this.route});
  }
}
