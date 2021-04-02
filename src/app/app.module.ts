import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { nl_BE } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import nl from '@angular/common/locales/nl';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AntModule } from './ant/ant.module';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';

registerLocaleData(nl);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AntModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: nl_BE }],
  bootstrap: [AppComponent]
})
export class AppModule { }
