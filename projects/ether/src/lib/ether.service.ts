import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum EtherType {
  Default,
  Success,
  Warning,
  Error
}

export interface EtherAction {
  button: string;
  action: () => void
}

export interface EtherData {
  type?: EtherType;
  title?: string;
  message?: string;
  color?: string;
  duration?: number;
  completion?: () => void;
  onConfirm?: EtherAction;
  onCancel?: EtherAction;
}


@Injectable({
  providedIn: 'root'
})
export class EtherService {

  public data$ = new Subject<EtherData>();

  public launch(custom?: EtherData): void {
    const params: EtherData = {
      type: EtherType.Default,
      title: 'Notification',
      message: 'Blah, balh, balh!',
      color: '#303030',
      duration: 3000,
      completion: () => {},
      onConfirm: {
        button: 'Okay',
        action: () => {}
      },
      onCancel: {
        button: 'Cancel',
        action: () => {}
      }
    };
    this.data$.next({ ...params, ...custom });
  }

}
