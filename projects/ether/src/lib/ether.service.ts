import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface EtherStyle {
  color: string;
  title: string;
}

export class EtherDefaults {
  public static Default: EtherStyle = { color: '#303030', title: 'Success' };
  public static Success: EtherStyle = { color: 'green', title: 'Success' };
  public static Warning: EtherStyle = { color: 'orange', title: 'Warning' };
  public static Error: EtherStyle = { color: 'Red', title: 'Error' };
}

export class EtherDefaultButtons {
  public static Close: EtherStyle = { color: '#303030', title: 'Success' };
  public static Success: EtherStyle = { color: 'green', title: 'Success' };
  public static Warning: EtherStyle = { color: 'orange', title: 'Warning' };
  public static Error: EtherStyle = { color: 'Red', title: 'Error' };
}



export interface EtherButton {
  label?: string;
  color?: string;
  action?: () => void;
}

export interface EtherNotification {
  style?: EtherStyle;
  title?: string;
  message?: string;
  color?: string;
  duration?: number;
  completion?: () => void;
  button?: EtherButton;
}


@Injectable({
  providedIn: 'root'
})
export class EtherService {

  public notification$ = new Subject<EtherNotification>();

  public launch(custom?: EtherNotification): void {
    const params: EtherNotification = {
      style: EtherDefaults.Default,
      title: 'Notification',
      message: 'Error with connecting to ethernet',
      color: '#303030',
      duration: 3000,
      completion: () => { console.log('completion'); },
      // button: { label: '&#x2715;', color: 'white', action: () => { console.log('buttonClick'); } }
    };
    this.notification$.next({ ...params, ...custom });
  }

}
