import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab1ParentComponent } from './tab1-parent/tab1-parent.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1RoutingModule { }
