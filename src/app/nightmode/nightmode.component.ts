import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nightmode',
  imports: [],
  templateUrl: './nightmode.component.html',
  styleUrl: './nightmode.component.css'
})
export class NightmodeComponent {

  isDarkMode = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      this.renderer.addClass(document.body, 'dark-theme');
    }
  }

  toggleTheme(event: any): void {
    this.isDarkMode = event.target.checked;

    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}