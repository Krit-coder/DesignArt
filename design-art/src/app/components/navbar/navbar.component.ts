import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(private renderer: Renderer2) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const navLinks = document.querySelector('.nav-links');
    if (this.isMenuOpen) {
      this.renderer.addClass(navLinks, 'show');
    } else {
      this.renderer.removeClass(navLinks, 'show');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > window.innerHeight) {
      this.renderer.addClass(navbar, 'scrolled');
    } else {
      this.renderer.removeClass(navbar, 'scrolled');
    }
  }
}
