import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild("darkMode") inputDarkMode: ElementRef;
  @Output() toggleDarkModeEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  darkModeClick() {
    this.toggleDarkModeEvent.emit(this.inputDarkMode.nativeElement.checked);
  }

}
