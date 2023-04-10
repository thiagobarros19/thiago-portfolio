import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LucideAngularModule, Cpu, User, ChevronsLeftRight, Briefcase, AtSign } from 'lucide-angular';
import { AboutComponent } from './about/about.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ExperienceComponent } from './experience/experience.component';
import { SocialComponent } from './social/social.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    AboutComponent,
    TechnologiesComponent,
    ExperienceComponent,
    SocialComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,
    LucideAngularModule.pick({
      Cpu,
      User,
      ChevronsLeftRight,
      Briefcase,
      AtSign
    })
  ]
})
export class PortfolioModule { }
