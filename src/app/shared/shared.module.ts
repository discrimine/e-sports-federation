import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon';

const sharedComponents = [
  HeaderComponent,
  FooterComponent,
];

const sharedModules = [
  MatListModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatCardModule,
  RouterModule,
  MatIconModule
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
