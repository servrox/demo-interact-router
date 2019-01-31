import { Component, OnDestroy } from '@angular/core';
import { LoadingService } from '../loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ss-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent implements OnDestroy {

  subscription: Subscription;
  showOverlay = false;

  constructor(private loadingService: LoadingService) {
    this.subscription = this.loadingService.showOverlay$.subscribe(
      ms => {
        this.showOverlay = true;
        setTimeout(() => { this.showOverlay = false; }, ms);
      });
  }

  ngOnDestroy() { this.subscription.unsubscribe(); }
}
