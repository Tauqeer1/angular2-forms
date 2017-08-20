import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  submittedValue;
  constructor() {}

  onSubmit(value: any, valid: boolean) {
    console.log('valid', valid);
    console.log('value', value);
  }

  onReset() {
    this.submittedValue = null;
  }

  onSubmit1(value: any, valid: boolean) {
    if(valid === false) {
      // form['_submitted'] = false;
      return;
    }
  }
  onSubmit2(value: any, valid: boolean) {
    console.log('valid', valid);
    console.log('value', value);
  }
  onSubmit3(value: any, valid: boolean) {
    console.log('valid', valid);
    console.log('value', value);
  }
}
