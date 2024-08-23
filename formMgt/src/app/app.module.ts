import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ErrorComponent } from './error/error.component';
import { ViewListComponent } from './view-list/view-list.component';
import { UrlService } from './services/url.service';
import { ContactsService } from './services/contacts.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormComponent,
    ListComponent,
    ErrorComponent,
    ViewListComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UrlService, ContactsService]
})
export class AppModule { }
