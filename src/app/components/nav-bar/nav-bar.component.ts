import { Component, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [
    DarkModeService
  ]
})
export class NavBarComponent implements AfterViewInit {
  @ViewChild("darkMode") inputDarkMode: ElementRef;
  @Output() toggleDarkModeEvent = new EventEmitter<boolean>();

  constructor(private service: DarkModeService) { }

  ngAfterViewInit(): void {
    if (this.service.isDarkMode) {
      this.inputDarkMode.nativeElement.checked = true;
    }
  }

  darkModeClick() {
    this.toggleDarkModeEvent.emit(this.inputDarkMode.nativeElement.checked);
  }

}
