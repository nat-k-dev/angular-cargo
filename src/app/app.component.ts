import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cargo';
  darkMode: boolean = false;
  @ViewChild(NavBarComponent) navBar: NavBarComponent;
  @ViewChild("mainContainer") divMainContainer: ElementRef;

  ngOnInit(): void {
    console.log(this.navBar);
  }

  toggleDarkMode(isDarkMode: boolean) {
    if (isDarkMode) {
      this.divMainContainer.nativeElement.classList.add("dark");
    } else {
      this.divMainContainer.nativeElement.classList.remove("dark");
    }
  }
}
