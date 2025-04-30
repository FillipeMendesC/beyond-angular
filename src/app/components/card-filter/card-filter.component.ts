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

  getValidFilterOptions(filter: userFilter) {
    var keys = Object.keys(filter) as Array<keyof userFilter>;
  
    var valid = [];
    for (let index = 2; index < keys.length; index++) {
      const key = keys[index];
      const propValue = filter[key];

       if (propValue != null && propValue !== '') {
          valid.push({ key: key, value: propValue });
       }
    }
    return valid;
  }

  ngOnInit():void {
    this.filterList.set(this.cardFilterService.getUserFilters())
  }
}
