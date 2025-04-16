import { Component } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { DesignComponent } from './components/design/design.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [MainComponent,DesignComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
