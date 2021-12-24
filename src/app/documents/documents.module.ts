import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './documents.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [DocumentsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class DocumentsModule { }
