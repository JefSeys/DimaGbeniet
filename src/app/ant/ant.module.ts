import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';



@NgModule({
  exports: [
    NzButtonModule,
    NzIconModule,
    NzMenuModule,
    NzImageModule,
  ]
})
export class AntModule { }
