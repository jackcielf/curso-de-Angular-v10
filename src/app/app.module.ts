import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayComponent } from './components/array/array.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { EventsComponent } from './components/events/events.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayComponent,
    DataBindingComponent,
    StyleBindingComponent,
    EventsComponent,
    TwoWayBindingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
