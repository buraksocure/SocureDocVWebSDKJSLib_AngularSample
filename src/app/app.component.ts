import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Your App Title';

  config = {
    onProgress: (progress: any) => { console.log(progress); console.log('progress') },
    onSuccess: (response: any) => { console.log(response); console.log('success') },
    onError: (error: any) => { console.log(error); console.log('error') },
    qrCodeNeeded: true
  };

  inputData = {
    "customerUserId": "CustomerUserID"
  }
  
  processConfig = {
    "language": "en",
    flowObject: {
      name: "socure_default"
    }
  };

  firstAttribute = 1;
  sdkKey = 'SDK_KEY';
}
