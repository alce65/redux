import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SampleComponent } from './sample/sample.component';
import { HomeComponent } from './home.component';
import { CounterComponent } from './counter/counter.component';
import { ResetComponent } from './reset/reset.component';


@NgModule({
  declarations: [
    SampleComponent,
    HomeComponent,
    CounterComponent,
    ResetComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
