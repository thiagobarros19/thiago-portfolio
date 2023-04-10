import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { AboutComponent } from './about/about.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ExperienceComponent } from './experience/experience.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'technologies',
        component: TechnologiesComponent
      },
      {
        path: 'experience',
        component: ExperienceComponent
      },
      {
        path: 'social',
        component: SocialComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
