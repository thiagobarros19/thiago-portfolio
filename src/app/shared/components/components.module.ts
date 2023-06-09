import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { TechItemComponent } from './tech-item/tech-item.component';
import { SocialItemComponent } from './social-item/social-item.component';
import { MatButtonModule } from '@angular/material/button';
import { ExperienceItemComponent } from './experience-item/experience-item.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { LucideAngularModule, Maximize2, Minimize2, Minus, X } from 'lucide-angular';

const components = [
  HeaderBarComponent,
  TechItemComponent,
  SocialItemComponent,
  ExperienceItemComponent,
  FooterBarComponent
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    MatButtonModule,
    LucideAngularModule.pick({
      Minimize2,
      Maximize2,
      X,
      Minus
    })
  ]
})
export class ComponentsModule { }
