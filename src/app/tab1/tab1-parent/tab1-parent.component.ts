import { Component } from '@angular/core';
import { LoadingService } from 'src/app/core/loading.service';

@Component({
  selector: 'ss-tab1-parent',
  templateUrl: './tab1-parent.component.html',
  styleUrls: ['./tab1-parent.component.scss']
})
export class Tab1ParentComponent {

  constructor(private loadingService: LoadingService) { }

  fire() {
    this.loadingService.load(1000);
  }
}
