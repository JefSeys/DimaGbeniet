import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact/contact.component';
import { DeWoningComponent } from './de-woning/de-woning/de-woning.component';
import { HoofdschermModule } from './hoofdscherm/hoofdscherm.module';
import { HoofdschermComponent } from './hoofdscherm/hoofdscherm/hoofdscherm.component';
import { InfoComponent } from './info/info/info.component';
import { LiggingComponent } from './ligging/ligging/ligging.component';
import { RecensiesComponent } from './recensies/recensies/recensies.component';



const routes: Routes = [
  {
    path: 'hoofdscherm', 
    loadChildren: () => import('./hoofdscherm/hoofdscherm.module').then(m => m.HoofdschermModule)
  },
  {
    path: 'deWoning',
    loadChildren: () => import('./de-woning/de-woning.module').then(m => m.DeWoningModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then(m => m.InfoModule)
  },
  {
    path: 'ligging',
    loadChildren: () => import('./ligging/ligging.module').then(m => m.LiggingModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'recensies',
    loadChildren: () => import('./recensies/recensies.module').then(m => m.RecensiesModule)
  },
  {
    path: '',
    loadChildren: () => import('./hoofdscherm/hoofdscherm.module').then(m => m.HoofdschermModule)
  },
  {
    path: '**',
    loadChildren: () => import('./hoofdscherm/hoofdscherm.module').then(m => m.HoofdschermModule)
  }
];



@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
