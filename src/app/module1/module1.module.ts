import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { FirstcomponentComponent } from './first/firstcomponent.component';


@NgModule({
  declarations: [
    FirstcomponentComponent
  ],
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  exports:[FirstcomponentComponent]
})
export class Module1Module { }
