import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import {MatTabsModule} from '@angular/material/tabs';

import { OnlyNumber } from './hello.directive'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PatternDirective } from './pattern.directive';

@NgModule({
  imports:      [ BrowserModule,BrowserAnimationsModule, MatTabsModule,MatIconModule,MatMenuModule,FormsModule ],
  declarations: [ AppComponent, HelloComponent, OnlyNumber, PatternDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
