import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HooksComponent } from './hooks/hooks.component';
import { ServiceService } from './service.service';
@NgModule({
  declarations: [AppComponent, FormComponent, HooksComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
