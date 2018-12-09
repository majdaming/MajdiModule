import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MajdiComponent } from './majdi/majdi.component';
import { MathService } from './services/math.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MajdiComponent],
  providers: [MathService],
  exports: [MajdiComponent]
})
export class MajdiModule { }
