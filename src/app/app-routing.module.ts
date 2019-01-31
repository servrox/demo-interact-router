import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tab1',
    loadChildren: './tab1/tab1.module#Tab1Module'
  },
  {
    path: 'tab2',
    loadChildren: './tab2/tab2.module#Tab2Module'
  },
  {
    path: '',
    redirectTo: 'tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
