import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtherComponent } from './ether.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [EtherComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [EtherComponent]
})
export class EtherModule { }
