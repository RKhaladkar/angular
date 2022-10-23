import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { UserauthGuard } from './gaurds/userauth.guard';
import { GirlsComponent } from './girls/girls.component';
import { HttpcompComponent } from './httpcomp/httpcomp.component';
import { GirlsbagComponent } from './girlsbag/girlsbag.component';
import { GirlswatchComponent } from './girlswatch/girlswatch.component';
import { HelloComponent } from './hello/hello.component';
import { MensComponent } from './mens/mens.component';
import { MensfootwareComponent } from './mensfootware/mensfootware.component';
import { MenswatchComponent } from './menswatch/menswatch.component';
import { MyloginComponent } from './mylogin/mylogin.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AsyncComponent } from './subjects/async/async.component';
import { BehaviorComponent } from './subjects/behavior/behavior.component';
import { ReplayComponent } from './subjects/replay/replay.component';
import { SubjectComponent } from './subjects/subject/subject.component';
import { VoidComponent } from './subjects/void/void.component';
import { PipeComponent } from './pipes/pipe/pipe.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  {path:'calculator',component:CalculatorComponent, canActivate:[UserauthGuard]},
  {path:'form',component:ReactiveFormsComponent},
  {path:'RxJs',component:RxjsComponent},
  {path:'crud',component:CrudComponent},
  {path:'pipe',component:PipeComponent},
  {path: 'HTTP', component:HttpcompComponent},
  {path:'mens',component:MensComponent, 
  children:[{path:'mensfootware', component:MensfootwareComponent },
            {path:'menswatch', component:MenswatchComponent }] },

  {path:'girls', component:GirlsComponent,
  children:[{path:'girlsbag', component:GirlsbagComponent},
            {path:'girlswatch',component:GirlswatchComponent}]},

  {path:'subjects', component:SubjectComponent,
  children:[{path:'async', component: AsyncComponent},
            {path:'behavior',component: BehaviorComponent},
            {path:'void', component:VoidComponent},
            {path:'replay', component:ReplayComponent}
          ]},
  {path:'mylogin',component:MyloginComponent},
  
  {path:'hello',component:HelloComponent},

  {path:'', redirectTo :'/child' , pathMatch:'full'},

  {path:'login', redirectTo :'/mylogin' , pathMatch:'full'},

  {path:'**',component:NopagefoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
