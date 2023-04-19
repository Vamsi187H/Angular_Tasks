import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactBoxComponent } from './pages/contacts/contact-box/contact-box.component';
import { ServiceBoxComponent } from './pages/home/service-box/service-box.component';
import { TestimonialsBoxComponent } from './pages/testimonials/testimonials-box/testimonials-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    AboutComponent,
    TestimonialsComponent,
    ContactsComponent,
    ContactBoxComponent,
    ServiceBoxComponent,
    TestimonialsBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
