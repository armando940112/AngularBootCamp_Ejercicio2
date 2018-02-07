import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  author = 'Armando Londoño';
  imageUrl = 'https://api.adorable.io/avatars/400/@adorable.io.png';
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
    return `${Math.floor(Math.random() * (500 - 1 + 1)) + 1}`;
  }
}
