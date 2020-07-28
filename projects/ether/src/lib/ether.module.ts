import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtherComponent } from './ether.component';



@NgModule({
  declarations: [EtherComponent],
  imports: [
    CommonModule
  ],
  exports: [EtherComponent]
})
export class EtherModule { }
