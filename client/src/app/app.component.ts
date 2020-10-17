import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'client';
  public bg = 'bg-dark';

  changeColor(value) {
    this.bg = value;
  }
}
