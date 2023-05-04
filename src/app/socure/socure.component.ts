import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';

declare var SocureInitializer: any;
declare var Socure: any;

@Component({
  selector: 'app-socure',
  templateUrl: './socure.component.html',
  styleUrls: ['./socure.component.css']
})
export class SocureComponent implements OnInit, AfterViewInit {
  @Input() config: any;
  @Input() inputData: any;
  @Input() processConfig: any;
  @Input() firstAttribute: number = 1;
  @Input() sdkKey: string = '';

  private sdkInitiated: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.addScript();
  }

  addScript() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://websdk.socure.com/bundle.js';
    script.onload = () => {
      this.initSocure();
    };
    this.el.nativeElement.appendChild(script);
  }

  initSocure() {
    const start = () => {
      if (this.sdkInitiated) {
        this.clearSession();
        console.log('cleaned');
        this.sdkInitiated = false;
      }

      SocureInitializer.init(this.sdkKey)
        .then((lib: any) => {
          lib.init(this.sdkKey, "#websdk", this.config).then(() => {
            lib.start(this.firstAttribute, this.inputData, this.processConfig).then((response: any) => {
              console.log(response);
              this.sdkInitiated = true;
            },
            (error: any) => {
              console.log(error);
            });
          });
        });
    };

    const clearSession = () => {
      Socure.cleanup();
      Socure.reset();
      sessionStorage.removeItem('documentVerificationToken');
      sessionStorage.removeItem('publicApiKey');
      localStorage.removeItem('devicer_id');
      console.log("Socure DocV Session cleaned!");
    }

    this.start = start;
    this.clearSession = clearSession;
  }

  start() {
    // Placeholder for the start function
  }

  clearSession() {
    // Placeholder for the clearSession function
  }
}
