import { Component } from '@angular/core';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from "./pages/home/home.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MenuComponent, HomeComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-funcionario';
}
