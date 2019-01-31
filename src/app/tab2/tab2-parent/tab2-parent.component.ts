import { Component } from '@angular/core';
import { LoadingService } from 'src/app/core/loading.service';

@Component({
  selector: 'ss-tab2-parent',
  templateUrl: './tab2-parent.component.html',
  styleUrls: ['./tab2-parent.component.scss']
})
export class Tab2ParentComponent {

  constructor(private loadingService: LoadingService) { }

  fire() { this.loadingService.load(1000); }
}
