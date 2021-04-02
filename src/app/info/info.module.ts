import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { AntModule } from '../ant/ant.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'info', component: InfoComponent },
];


@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    AntModule,
    RouterModule.forChild(routes)
  ]
})
export class InfoModule { }
