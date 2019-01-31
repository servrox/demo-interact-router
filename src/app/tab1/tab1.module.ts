import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tab1RoutingModule } from './tab1-routing.module';
import { Tab1ParentComponent } from './tab1-parent/tab1-parent.component';

import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [Tab1ParentComponent],
  imports: [
    CommonModule,
    Tab1RoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class Tab1Module { }
