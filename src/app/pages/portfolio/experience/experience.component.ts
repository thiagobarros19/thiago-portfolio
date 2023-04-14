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
          description: 'Liderando um time multidiciplinar de desenvolvimento de produtos, ajudando para os projetos se mantenham sempre dentro dos prazos e entregues com qualidade'
        },
        {
          startDate: '2021-11-01',
          endDate: '2023-04-01',
          role: 'Web developer (Frontend) Jr',
          description: 'Atuando como desenvolvedor frontend responsável por manter aplicações atuais e desenvolver novos sistemas web utilizando Angular em todos os desenvolvimentos. Também atuando como líder de projeto executando funções como criação de cronograma, separação do projeto em módulos, organização das tarefas e atribuição a cada responsável, reuniões semanais para acompanhamento do desenvolvimento, contato direto do cliente para elicitação de requisitos e entregas dos módulos concluídos, como também remover os impedimentos dos membros da equipe.'
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
          description: 'Responsável por continuar o desenvolvimento de um sistema local, implementando novas features e refatorando implementações anteriores, executei função de fullstack utilizando as seguintes ferramentas: PHP, Laravel, Typescript, Angular, Postgres, Azure Devops, Servidor Linux'
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
