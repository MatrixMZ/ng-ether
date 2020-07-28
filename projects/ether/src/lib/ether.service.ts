import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface EtherAlert {
  prefix: string;
  message: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class EtherService {

  public alertMessage$ = new Subject<EtherAlert>();

  public createSuccessAlert(message: string): void {
    this.alertMessage$.next(this.createAlertMessage('Success', message, 'green'));
  }

  public createDangerAlert(message: string): void {
    this.alertMessage$.next(this.createAlertMessage('Danger', message, 'red'));
  }

  public createWarningAlert(message: string): void {
    this.alertMessage$.next(this.createAlertMessage('Warning', message, 'darkorange'));
  }

  public createInfoAlert(message: string): void {
    this.alertMessage$.next(this.createAlertMessage('Info', message, 'dodgerblue'));
  }

  private createAlertMessage(prefix: string, message: string, color: string): EtherAlert {
    return {prefix, message, color};
  }
}
