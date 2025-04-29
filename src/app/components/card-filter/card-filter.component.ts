import { Component, inject, signal } from '@angular/core';
import { CardFilterService } from '../../services/card-filter/card-filter.service';
import { userFilter } from '../../models/user-filter.type';

@Component({
  selector: 'app-card-filter',
  imports: [],
  templateUrl: './card-filter.component.html',
  styleUrl: './card-filter.component.css'
})
export class CardFilterComponent {
  cardFilterService = inject(CardFilterService)
  filterList = signal<Array<userFilter>>([]);

  ngOnInit():void {
    this.filterList.set(this.cardFilterService.getUserFilters())
  }
}
