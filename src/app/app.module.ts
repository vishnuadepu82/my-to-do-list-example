import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ProjectsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
