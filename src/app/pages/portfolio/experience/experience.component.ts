import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Experience } from 'src/app/model/application';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  public experiences: Experience[] = [
    {
      logoUrl: 'assets/images/experience/actionlabs.jpeg',
      companyName: 'Action Labs',
      experienceJobs: [
        {
          startDate: '2022-07-01',
          endDate: '2023-04-01',
          role: 'Squad Leader',
          description: 'Executando funções como full stack desenvolvi aplicações web e mobile como também alguns webservices para esses apps, utilizando as seguintes ferramentas, Javascript, CSS, HTML, Framework7, PHP, MySql, cPanel, Linux'
        },
        {
          startDate: '2021-11-01',
          endDate: '2023-04-01',
          role: 'Web developer (Frontend) Jr',
          description: 'Executando funções como full stack desenvolvi aplicações web e mobile como também alguns webservices para esses apps, utilizando as seguintes ferramentas, Javascript, CSS, HTML, Framework7, PHP, MySql, cPanel, Linux'
        }
      ]
    },
    {
      logoUrl: 'assets/images/experience/inforpop.png',
      companyName: 'Inforpop Pharma',
      experienceJobs: [
        {
          startDate: '2021-02-01',
          endDate: '2021-10-01',
          role: 'Web developer (Full stack) Pl',
          description: 'Executando funções como full stack desenvolvi aplicações web e mobile como também alguns webservices para esses apps, utilizando as seguintes ferramentas, Javascript, CSS, HTML, Framework7, PHP, MySql, cPanel, Linux'
        }
      ]
    },
    {
      logoUrl: 'assets/images/experience/officecom.jpeg',
      companyName: 'Officecom Sistemas',
      experienceJobs: [
        {
          startDate: '2019-08-01',
          endDate: '2021-01-01',
          role: 'Web developer (Full stack) Jr',
          description: 'Executando funções como full stack desenvolvi aplicações web e mobile como também alguns webservices para esses apps, utilizando as seguintes ferramentas, Javascript, CSS, HTML, Framework7, PHP, MySql, cPanel, Linux'
        }
      ]
    }
  ]

  constructor(private _titleService:Title) {
    this._titleService.setTitle('Thiago Barros - Experience')
  }
}
