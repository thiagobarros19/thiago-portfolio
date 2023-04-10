import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface SidebarItem {
  title: string;
  icon: string;
  slug: string;
  active: boolean;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @HostListener('document:keypress', ['$event'])
  private _handleKeyboardEvent(event: KeyboardEvent) {
    event.preventDefault();

    if (event.ctrlKey || event.metaKey) {

      if (event.key === 'b') {
        this.closedSidebar = !this.closedSidebar;
      }

      if (event.key === 'a') {
        this.setActiveTab('about');
      }

      if (event.key === 't') {
        this.setActiveTab('technologies');
      }

      if (event.key === 'p') {
        this.setActiveTab('projects');
      }

      if (event.key === 'e') {
        this.setActiveTab('experience');
      }

      if (event.key === 's') {
        this.setActiveTab('social');
      }
    }

  }

  public title: string = 'Thiago Barros';
  public closedSidebar: boolean = false;

  public sidebarItens: SidebarItem[] = [
    { title: 'About', icon: 'user', slug: 'about', active: true },
    { title: 'Technologies', icon: 'chevrons-left-right', slug: 'technologies', active: false },
    { title: 'Experience', icon: 'briefcase', slug: 'experience', active: false },
    { title: 'Social', icon: 'at-sign', slug: 'social', active: false },
  ]

  constructor(
    private readonly _router: Router,
  ) {}

  ngOnInit(): void {
    this.setActiveTab(this._router.url.substring(1))
  }

  public setActiveTab(slug: string): void {
    this.sidebarItens.forEach(sidebarItem => {
      sidebarItem.active = sidebarItem.slug === slug;
    });

    this._router.navigate([`/${slug}`])
  }

}
