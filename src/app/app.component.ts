import { Component } from '@angular/core';

@Component({ //Attribute gibi
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //array
})
export class AppComponent {
  title: string = "northwind";
  user: string = "Emre Polat";
  
}
