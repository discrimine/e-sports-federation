import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

const sharedComponents = [
  HeaderComponent,
  FooterComponent,
];

const sharedModules = [
  MatListModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...sharedModules
  ],
  exports: [
    ...sharedComponents,
    ...sharedModules
  ]
})
export class SharedModule { }
