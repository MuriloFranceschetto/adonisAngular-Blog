import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() getColor = new EventEmitter();
  public valueToggle = false;

  constructor() { }

  changeColor(checked) {
    this.getColor.emit((checked ? 'bg-light' : 'bg-dark'));
    this.valueToggle = checked;
  }
 
}
