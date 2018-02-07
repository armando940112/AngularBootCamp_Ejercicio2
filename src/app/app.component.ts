import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  author = 'Armando Londoño';
  imageUrl: string;
  baseUrl = 'https://api.adorable.io/avatars/500/';
  urlSuffix = '@adorable.io.png';

  constructor() {
    setInterval( () =>
      this.generateRandomFace(), 1000
    );
  }
  
  generateRandomFace() {
    this.imageUrl = `${this.baseUrl}${this.getRandomImageId()}${this.urlSuffix}`;
  }

  getRandomImageId(): string {
    return Math.random().toString();
  }
}
