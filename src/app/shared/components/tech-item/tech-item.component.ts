import { Component, Input } from '@angular/core';
import { Technology } from 'src/app/model/application';

@Component({
  selector: 'app-tech-item',
  templateUrl: './tech-item.component.html',
  styleUrls: ['./tech-item.component.scss']
})
export class TechItemComponent {
  @Input()
  public techonology: Technology;
}
