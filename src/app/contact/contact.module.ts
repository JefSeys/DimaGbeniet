import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AntModule } from '../ant/ant.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: ContactComponent },
];


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    AntModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
