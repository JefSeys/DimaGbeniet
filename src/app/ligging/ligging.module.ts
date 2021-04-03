import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiggingComponent } from './ligging/ligging.component';
import { AntModule } from '../ant/ant.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: LiggingComponent },
];


@NgModule({
  declarations: [LiggingComponent],
  imports: [
    CommonModule,
    AntModule,
    RouterModule.forChild(routes)
  ]
})
export class LiggingModule { }
