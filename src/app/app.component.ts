import { Component } from '@angular/core';
import { HEADER_HEIGHT, FOOTER_HEIGHT, CONTENT_HEIGHT, CONTENT_INDENT } from './shared/constants/markup.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public headerHeight = HEADER_HEIGHT;
  public footerHeight = FOOTER_HEIGHT;
  public contentHeight = CONTENT_HEIGHT;
  public contentIndent = CONTENT_INDENT;
}
