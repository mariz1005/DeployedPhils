import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationTabsComponent } from "./navigation-tabs/navigation-tabs.component";
import { ContactComponent } from "./contact/contact.component";
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationTabsComponent, ContactComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'website';
}
