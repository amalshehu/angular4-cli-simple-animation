import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      state('collapsed, void',
        style({ height: '0px', color: 'maroon', borderColor: 'maroon' })),
      state('expanded',
        style({ height: '*', borderColor: 'green', color: 'green' })),
      transition('collapsed <=> expanded', [
        animate(500, style({ height: '250px' })),
        animate(500)
      ])
    ])
  ]
})
export class AppComponent {
  title = 'app works!';
  stateExpression: string;
  constructor() {
    this.collapse();
  }
  expand() {
    this.stateExpression = 'expanded';
  }
  collapse() {
    this.stateExpression = 'collapsed';
  }
}
