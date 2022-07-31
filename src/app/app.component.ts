import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userDev = {
    name: "Rômulo",
    linkedin: "https://www.linkedin.com/in/romulo-sobrinho/",
    github: "https://github.com/romulo-sobrinho"
  }


  title = 'projeto-angular';
}
