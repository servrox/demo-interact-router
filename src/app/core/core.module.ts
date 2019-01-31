import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';
import { LoadingService } from './loading.service';

@NgModule({
  declarations: [
    LoadingOverlayComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LoadingService
  ],
  exports: [
    LoadingOverlayComponent
  ]
})
export class CoreModule { }
