import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ExpertiseType, Technology } from 'src/app/model/application';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {

  public frontendTechs: Technology[] = [
    {
      logoUrl: 'assets/images/technology/angular.svg',
      title: 'Angular',
      expertise: ExpertiseType.EXPERT,
      age: 3,
    },
    {
      logoUrl: 'assets/images/technology/react.svg',
      title: 'React',
      expertise: ExpertiseType.INTERMEDIATE,
      age: 1,
    },
  ]

  public backendTechs: Technology[] = [
    {
      logoUrl: 'assets/images/technology/nestjs.svg',
      title: 'NestJS',
      expertise: ExpertiseType.ADVANCED,
      age: 1,
    },
    {
      logoUrl: 'assets/images/technology/laravel.svg',
      title: 'Laravel',
      expertise: ExpertiseType.INTERMEDIATE,
      age: 1,
    },
  ]

  public databaseTechs: Technology[] = [
    {
      logoUrl: 'assets/images/technology/postgres.svg',
      title: 'Postgres',
      expertise: ExpertiseType.ADVANCED,
      age: 2,
    },
    {
      logoUrl: 'assets/images/technology/mysql.png',
      title: 'MySql',
      expertise: ExpertiseType.INTERMEDIATE,
      age: 1,
    },
  ]

  constructor(private _titleService:Title) {
    this._titleService.setTitle('Thiago Barros - Technologies')
  }
}
