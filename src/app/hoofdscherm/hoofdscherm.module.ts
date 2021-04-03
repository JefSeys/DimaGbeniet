import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoofdschermComponent } from './hoofdscherm/hoofdscherm.component';
import { AntModule } from '../ant/ant.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HoofdschermComponent },
];


@NgModule({
  declarations: [HoofdschermComponent],
  imports: [
    CommonModule,
    AntModule,
    RouterModule.forChild(routes)
  ]
})
export class HoofdschermModule { }
