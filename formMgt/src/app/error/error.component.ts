import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule,FormComponent],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {

  constructor(private route:ActivatedRoute, private router: Router){}

  back(){
    this.router.navigate(['../'], { relativeTo: this.route});
  }
}
