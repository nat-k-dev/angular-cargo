import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <app-heading></app-heading>
    <app-pricing-table></app-pricing-table>
    <app-team></app-team>
    <app-reviews></app-reviews>
    <app-contact-form></app-contact-form>
  `
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
