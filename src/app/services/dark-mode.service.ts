import { Injectable } from '@angular/core';

@Injectable()
export class DarkModeService {
  isDarkMode: boolean = false;

  constructor() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-schee: dark)");
    const prefersDarkMode = prefersDarkScheme.matches; 
    this.isDarkMode = prefersDarkMode || localStorage.getItem('color-theme') === 'dark';
  }

  setDarkMode(value: boolean) {
    this.isDarkMode = value;
    if (this.isDarkMode) {
      localStorage.setItem('color-theme', 'dark');
    } else {
      localStorage.setItem('color-theme', 'light');
    }
  }



}
