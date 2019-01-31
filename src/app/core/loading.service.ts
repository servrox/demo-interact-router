import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private showOverlay = new Subject<number>();
  showOverlay$ = this.showOverlay.asObservable();

  constructor() { }

  load(ms: number) {
    this.showOverlay.next(ms);
  }

}
