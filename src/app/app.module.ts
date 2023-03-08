import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CareerComponent } from './career/career.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { HomeComponent } from './home/home.component';
import { StringShorterPipe } from './shared/pipes/string-shorter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CareerComponent,
    HeaderComponent,
    BannerComponent,
    JobDetailsComponent,
    HomeComponent,
    StringShorterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
