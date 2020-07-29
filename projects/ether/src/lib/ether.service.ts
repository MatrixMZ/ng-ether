import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface EtherDefaults {
  color: string;
  title: string;
}

export class EtherType {
  public static Default: EtherDefaults = { color: '#303030', title: 'Success' };
  public static Success: EtherDefaults = { color: 'green', title: 'Success' };
  public static Warning: EtherDefaults = { color: 'orange', title: 'Warning' };
  public static Error: EtherDefaults = { color: 'Red', title: 'Error' };
}

export interface EtherAction {
  button: string;
  action: () => void;
}

export interface EtherData {
  type?: EtherDefaults;
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
