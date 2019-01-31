import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab2ParentComponent } from './tab2-parent/tab2-parent.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2RoutingModule { }
