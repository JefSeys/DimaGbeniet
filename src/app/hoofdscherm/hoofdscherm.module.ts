import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoofdschermComponent } from './hoofdscherm/hoofdscherm.component';
import { AntModule } from '../ant/ant.module';
import { RouterModule, Routes } from '@angular/router';
import { GalleryModule } from '@ks89/angular-modal-gallery';

const routes: Routes = [
  { path: '', component: HoofdschermComponent },
];


@NgModule({
  declarations: [HoofdschermComponent],
  imports: [
    CommonModule,
    AntModule,
    RouterModule.forChild(routes),
    GalleryModule
  ]
})
export class HoofdschermModule { }
