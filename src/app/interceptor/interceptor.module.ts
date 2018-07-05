import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InterceptorComponent } from './interceptor.component';

@NgModule({
  declarations: [
    InterceptorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [InterceptorComponent]
})
export class InterceptorModule { }