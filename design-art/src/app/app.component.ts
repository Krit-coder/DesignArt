import { Component } from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'design-art';
}

