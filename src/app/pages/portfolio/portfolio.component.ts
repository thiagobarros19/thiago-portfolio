import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
export class PortfolioComponent implements OnInit, AfterViewInit {

  @ViewChild('header')
  header: ElementRef;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this._windowWidth = window.innerWidth;
    this._windowHeight = window.innerHeight;
  }

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

  private _windowWidth: number;
  private _windowHeight: number;

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

    this._windowWidth = window.innerWidth;
    this._windowHeight = window.innerHeight;
  }

  ngAfterViewInit(): void {
      this._dragElement(this.header);
  }

  public setActiveTab(slug: string): void {
    this.sidebarItens.forEach(sidebarItem => {
      sidebarItem.active = sidebarItem.slug === slug;
    });

    this._router.navigate([`/${slug}`])
  }

  public maximize(): void {
    this.header.nativeElement.style.top = 0;
    this.header.nativeElement.style.left = 0;
    this.header.nativeElement.style.width = '100vw';
    this.header.nativeElement.style.height = '100vh';
    this.header.nativeElement.style.maxWidth = '100vw';
    this.header.nativeElement.style.maxHeight = '100vh';
  }

  public minimize(): void {

  }

  public restore(): void {
    this.header.nativeElement.style.top = '90px';
    this.header.nativeElement.style.left = '380px';
    this.header.nativeElement.style.width = '90%';
    this.header.nativeElement.style.height = '90%';
    this.header.nativeElement.style.maxWidth = '1120px';
    this.header.nativeElement.style.maxHeight = '700px';
  }

  public close(): void {

  }

  private _dragElement(el: ElementRef): void {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const closeDragElement = () => {
      document.onmouseup = null;
      document.onmousemove = null;
    }

    const elementDrag = (e: any) => {
      e = e || window.event;
      e.preventDefault();

      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      const top = el.nativeElement.offsetTop;
      const left = el.nativeElement.offsetLeft;
      const width = el.nativeElement.getBoundingClientRect().width;
      const height = el.nativeElement.getBoundingClientRect().height;
      const windowWidht = this._windowWidth;
      const windowHeight = this._windowHeight;

      if(
        top - pos2 > 0 &&
        left - pos1 > 0 &&
        height + top - pos2 <= windowHeight &&
        width + left - pos1 <= windowWidht
      ) {
        el.nativeElement.style.top = (el.nativeElement.offsetTop - pos2) + "px";
        el.nativeElement.style.left = (el.nativeElement.offsetLeft - pos1) + "px";
      } else {
        el.nativeElement.onmousedown = dragMouseDown;
      }
    }

    const dragMouseDown = (e: any) => {
      e = e || window.event;
      e.preventDefault();

      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    el.nativeElement.onmousedown = dragMouseDown;
  }

}
