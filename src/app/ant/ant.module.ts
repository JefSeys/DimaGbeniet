import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';


@NgModule({
  exports: [
    NzButtonModule,
    NzIconModule,
    NzMenuModule,
    NzImageModule,
    NzDividerModule,
    NzGridModule,
    NzLayoutModule 
  ]
})
export class AntModule { }
