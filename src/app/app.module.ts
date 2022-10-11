import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HeadingComponent } from './components/main/heading/heading.component';
import { TeamComponent } from './components/main/team/team.component';
import { ReviewsComponent } from './components/main/reviews/reviews.component';
import { ContactFormComponent } from './components/main/contact-form/contact-form.component';
import { PricingTableComponent } from './components/main/pricing-table/pricing-table.component';
import { ServiceComponent } from './components/service/service.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactsComponent } from './components/contacts/contacts.component';

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
    PricingTableComponent,
    ServiceComponent,
    PricingComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'service', component: ServiceComponent},
      { path: 'pricing', component: PricingComponent},
      { path: 'contacts', component: ContactsComponent},
      { path: '', component: MainComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
