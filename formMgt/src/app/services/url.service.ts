import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getInfo(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url);
  }

  postInfo(user:any){
    return this.http.post(this.url, user);
  }

  getContact(id:number) : Observable<Contact>{
    return this.http.get<Contact>(this.url+'/users/' + id);
  }

  updateInfo(id:number, newContact: Contact){
    const url = this.url + '/' + id;
    return this.http.put<Contact>(url, newContact);
  }

  deleteInfo(id:number){
    return this.http.delete(this.url + '/' + id);
  }
}
