import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecensiesComponent } from './recensies/recensies.component';
import { AntModule } from '../ant/ant.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: RecensiesComponent },
];


@NgModule({
  declarations: [RecensiesComponent],
  imports: [
    CommonModule,
    AntModule,
    RouterModule.forChild(routes)
  ]
})
export class RecensiesModule { }
