import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent {
  @Input()
  public title: string = 'Thiago Barros';

  @Output()
  public onMaximizeClick = new EventEmitter();

  @Output()
  public onRestoreClick = new EventEmitter();

  @Output()
  public onMinimizeClick = new EventEmitter();

  @Output()
  public onCloseClick = new EventEmitter();

  public isMaximized: boolean = false;
}
