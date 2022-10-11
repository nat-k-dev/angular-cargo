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
    const prefersDarkScheme = window.matchMedia("(prefers-color-schee: dark)");
    const prefersDarkMode = prefersDarkScheme.matches; 
    let isDarkMode = prefersDarkMode || localStorage.getItem('color-theme') === 'dark';
    // call in timeout (not immediately but after current script) 
    // because 'nativeElement' inside 'toggleDarkMode' function will be rendered after 'ngOnInit'
    setTimeout(() => { this.toggleDarkMode(isDarkMode) });
  }

  toggleDarkMode(isDarkMode: boolean) {
    if (isDarkMode) {
      this.divMainContainer.nativeElement.classList.add("dark");
      document.body.style.backgroundColor = 'black';
      localStorage.setItem('color-theme', 'dark');
    } else {
      this.divMainContainer.nativeElement.classList.remove("dark");
      document.body.style.backgroundColor = 'white';
      localStorage.setItem('color-theme', 'light');
    }
  }
}
