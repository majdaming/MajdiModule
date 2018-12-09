import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MajdiComponent } from './majdi/majdi.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MajdiComponent],
  exports: [MajdiComponent]
})
export class MajdiModule { }
