import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    DarkModeService
  ]
})
export class AppComponent implements AfterViewInit {
  title = 'cargo';
  @ViewChild(NavBarComponent) navBar: NavBarComponent;
  @ViewChild("mainContainer") divMainContainer: ElementRef;

  constructor(private service: DarkModeService) {}

  ngAfterViewInit(): void {
    this.toggleDarkMode(this.service.isDarkMode);
  }


  toggleDarkMode(isDarkMode: boolean) {
    if (isDarkMode) {
      this.divMainContainer.nativeElement.classList.add("dark");
      document.body.style.backgroundColor = 'black';
      this.service.setDarkMode(true);
    } else {
      this.divMainContainer.nativeElement.classList.remove("dark");
      document.body.style.backgroundColor = 'white';
      this.service.setDarkMode(false);
    }
  }
}
