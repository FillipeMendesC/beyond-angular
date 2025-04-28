import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrl: './content-section.component.css'
})
export class ContentSectionComponent {
  @Input() iconUrl: string = '';
  @Input() title: string = '';
}
