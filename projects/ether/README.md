# Ether
Easy to use & customize - **Angular Notificatios**.  
You can find this Angular library on this [GitHub](https://github.com/MatrixMZ/ng-ether-notification-library) repository.

## Instalation
Install package in your project:
```
  npm install @ziobrowsky/ether
```

Register `EtherModule` in your `AppModule`.
```
  import { EtherModule } from '@ziobrowsky/ether';
  ...
  @NgModule({
    imports: [
      EtherModule // Add this line
    ]
  })
  export class AppModule { }
```
Finally add the `<ng-ether></ng-ether>` tag to your `app.component.html` file.

## How to use?
To create a notification:
```
  import { EtherService } from '@ziobrowsky/ether';
  ...

  class ExampleClass {

    // Dependency Injection
    constructor(private ether: EtherService) { }

    showNotification(): void {
      this.ether.launch(); // Displays notification on the screen
    }
  }
```

## How to customize?
The `launch()` method takes an optional parameter as an object of notification details data to produce custom notification.
```
  this.ether.launch({
    title: 'Custom title',
    message: 'Desctiption',
    duration: 3000,
    theme: {
      primary: 'gold',
      text: 'black'
    },
    completion: () => { console.log('Notification has been closed'); },
    button: {
      label: 'OK',
      action: () => { console.log('Button has been clicked'); };
    }
  });
```

So if you want to change only the title of the notification then simply specify just the title attribute.
```
  this.ether.launch({ title: 'Success' });
```

## Completion callbacks & events?
There are two available events that you can use to dispatch your own methods.

```
  completion: () => { console.log('This method is executed after the notification hides'); },
  button: {
    action: () => { console.log('This method is executed after the button has been clicked'); };
  }
```

## Styling
There is a bunch of ready to use notification themes.
To use them - import `EtherTheme`
  `import { EtherDefaults } from '@ziobrowsky/ether';`
and use the predefined theme from it as following:
```
  this.ether.launch({
    theme: EtherDefaults.Success
  });
```
Avalable themes:
* Success
* Warning
* Error
* Default


Of course you can aways specify your own color theme:
```
  this.ether.launch({
    theme: {
      primary: 'teal',
      text: 'white'
    }
  });
```


