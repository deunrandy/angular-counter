import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Total <span [ngClass]="{'positive':name > 0, 'negative': name < 0}">{{name}}</span>!</h1>
    <div class="button-group">
    <button class="modify-btn negative" (click)=modify(-2)>-2</button>
    <button class="modify-btn negative" (click)=modify(-1)>-1</button>
    <button class="modify-btn positive" (click)=modify(1)>+1</button>
    <button class="modify-btn positive" (click)=modify(2)>+2</button>
    </div>
    <br/>
    <button class="reset" (click)=reset()>reset</button>
  `,
})
export class App {
  name: number = 0;

  modify(num: number) {
    this.name+= num
  }

  reset() {
    this.name = 0;
  }

}

bootstrapApplication(App);
