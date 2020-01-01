import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './header/page-header/page-header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [
    PageHeaderComponent,
  ],
  exports: [
    PageHeaderComponent,
  ]
})
export class ComponentsModule { }
