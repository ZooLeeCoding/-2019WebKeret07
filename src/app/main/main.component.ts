import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'Webfejl04';
  firstOutput: any;

  handleOutput(event) {
    console.log("megkaptam az outputot", event);
    this.firstOutput = event;
  }
}
