import { Component, Input } from '@angular/core';
import { Social } from 'src/app/model/application';

@Component({
  selector: 'app-social-item',
  templateUrl: './social-item.component.html',
  styleUrls: ['./social-item.component.scss']
})
export class SocialItemComponent {
  @Input()
  social: Social;
}
