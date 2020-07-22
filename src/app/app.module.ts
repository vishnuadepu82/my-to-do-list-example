import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import {PersonserviceService} from './../personservice.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ProjectsComponent ],
  bootstrap:    [ AppComponent ], 
  providers:    [PersonserviceService]
})
export class AppModule { }
