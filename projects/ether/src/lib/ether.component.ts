import { Component, OnInit } from '@angular/core';
import {merge, Observable, Subject} from 'rxjs';
import {EtherAlert, EtherService} from './ether.service';

@Component({
  selector: 'ng-ether',
  template: `
    <div class="alert" *ngIf="(alertMessage$ | async) as alertMessage" [ngStyle]="{background: alertMessage.color}">
      <span class="closebtn" (click)="closeAlert()">&times;</span>
      <strong>{{ alertMessage.prefix }}!</strong> {{ alertMessage.message }}
    </div>
  `,
  styles: [
  ]
})
export class EtherComponent implements OnInit {

  alertMessage$: Observable<EtherAlert | boolean>;
  close$ = new Subject<boolean>();

  constructor(private alertService: EtherService) {
  }

  ngOnInit() {
    this.alertMessage$ = merge(this.alertService.alertMessage$, this.close$);
  }

  closeAlert(): void {
    this.close$.next();
  }
}
