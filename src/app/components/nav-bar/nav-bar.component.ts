import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild("darkMode") inputDarkMode: ElementRef;
  @Output() toggleDarkModeEvent = new EventEmitter<boolean>();
  @Input() prefersDarkMode: boolean;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.prefersDarkMode) {
        this.inputDarkMode.nativeElement.checked = true;
      }
    });
  }

  darkModeClick() {
    this.toggleDarkModeEvent.emit(this.inputDarkMode.nativeElement.checked);
  }

}
