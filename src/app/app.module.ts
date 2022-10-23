import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { Custom1Directive } from './directives_custom/custom1.directive';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { Module1Module } from './module1/module1.module';
import { MyloginComponent } from './mylogin/mylogin.component';
import {MatButtonModule} from '@angular/material/button';
import { ShoppingComponent } from './shopping/shopping.component';
import { MensComponent } from './mens/mens.component';
import { GirlsComponent } from './girls/girls.component';
import { MenswatchComponent } from './menswatch/menswatch.component';
import { MensfootwareComponent } from './mensfootware/mensfootware.component';
import { HelloComponent } from './hello/hello.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { GirlswatchComponent } from './girlswatch/girlswatch.component';
import { GirlsbagComponent } from './girlsbag/girlsbag.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectComponent } from './subjects/subject/subject.component';
import { BehaviorComponent } from './subjects/behavior/behavior.component';
import { ReplayComponent } from './subjects/replay/replay.component';
import { AsyncComponent } from './subjects/async/async.component';
import { VoidComponent } from './subjects/void/void.component';
import { HttpcompComponent } from './httpcomp/httpcomp.component';
import { PipeComponent } from './pipes/pipe/pipe.component';
import { ReversestringPipe } from './pipes/reversestring.pipe';
import { CrudComponent } from './crud/crud.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CalculatorComponent,
    ParentComponent,
    ChildComponent,
    ReactiveFormsComponent,
    Custom1Directive,
    LifecycleComponent,
    MyloginComponent,
    ShoppingComponent,
    MensComponent,
    GirlsComponent,
    MenswatchComponent,
    MensfootwareComponent,
    HelloComponent,
    NopagefoundComponent,
    GirlswatchComponent,
    GirlsbagComponent,
    RxjsComponent,
    SubjectComponent,
    BehaviorComponent,
    ReplayComponent,
    AsyncComponent,
    VoidComponent,
    HttpcompComponent,
    PipeComponent,
    ReversestringPipe,
    CrudComponent,
    HomeComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    Module1Module,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
