import { Component, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  adminLevel = input("admin")

  showOptions = signal(false);
  private leaveTimeout: any;

  expandSidebar() {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    const sidebarWidth = sidebar.offsetWidth;
    const expandedWidth = sidebarWidth === 90 ? 160 : 90;
    sidebar.style.width = `${expandedWidth}px`;
    this.showOptions.set(false); 
    const navTextElements = document.querySelectorAll('.nav-text') as NodeListOf<HTMLElement>;
    navTextElements.forEach(element => {
      element.style.display = sidebar.offsetWidth === 90 ? 'initial' : 'none';
    });
    this.clearLeaveTimeout();
  }

  toggleOptions() {
    this.showOptions.set(!this.showOptions());
    this.clearLeaveTimeout();
  }

  onMouseOver() {
    this.showOptions.set(true);
    this.clearLeaveTimeout();
  }

  onMouseLeave() {
    this.leaveTimeout = setTimeout(() => {
      this.showOptions.set(false);
    }, 200);
  }

  clearLeaveTimeout() {
    if (this.leaveTimeout) {
      clearTimeout(this.leaveTimeout);
    }
  }
}
