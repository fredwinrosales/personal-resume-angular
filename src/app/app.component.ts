import { Component } from '@angular/core';
import { TextConfig } from './text.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text = TextConfig;
}
