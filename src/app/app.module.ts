import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HeadingComponent } from './components/main/heading/heading.component';
import { TeamComponent } from './components/main/team/team.component';
import { ReviewsComponent } from './components/main/reviews/reviews.component';
import { ContactFormComponent } from './components/main/contact-form/contact-form.component';
import { PricingTableComponent } from './components/main/pricing-table/pricing-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainComponent,
    HeadingComponent,
    TeamComponent,
    ReviewsComponent,
    ContactFormComponent,
    PricingTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
