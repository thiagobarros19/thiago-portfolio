import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Social } from 'src/app/model/application';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  public socials: Social[] = [
    {
      logoUrl: 'assets/images/social/linkedin.png',
      socialUrl: 'https://www.linkedin.com/in/ts-barros/',
      title: 'ts-barros'
    },
    {
      logoUrl: 'assets/images/social/github.png',
      socialUrl: 'https://github.com/thiagobarros19',
      title: 'thiagobarros19'
    },
    {
      logoUrl: 'assets/images/social/instagram.png',
      socialUrl: 'https://www.instagram.com/th.sbarros/',
      title: '@th.sbarros'
    },
  ]
  constructor(private _titleService:Title) {
    this._titleService.setTitle('Thiago Barros - Social')
  }
}
