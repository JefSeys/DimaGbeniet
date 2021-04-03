import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeWoningComponent } from './de-woning/de-woning.component';
import { AntModule } from '../ant/ant.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: DeWoningComponent },
];


@NgModule({
  declarations: [DeWoningComponent],
  imports: [
    CommonModule,
    AntModule,
    RouterModule.forChild(routes)
  ]
})
export class DeWoningModule { }
