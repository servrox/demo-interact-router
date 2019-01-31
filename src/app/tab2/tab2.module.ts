import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tab2RoutingModule } from './tab2-routing.module';
import { Tab2ParentComponent } from './tab2-parent/tab2-parent.component';

import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [Tab2ParentComponent],
  imports: [
    CommonModule,
    Tab2RoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class Tab2Module { }
