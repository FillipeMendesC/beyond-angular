import { Component, inject, OnInit, signal } from '@angular/core';
import { userEvent } from '../../models/user-event.type';
import { CardEventService } from '../../services/card-event/card-event.service';

@Component({
  selector: 'app-card-event',
  imports: [],
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.css'
})
export class CardEventComponent implements OnInit {
  cardEventService = inject(CardEventService)
  eventList = signal<Array<userEvent>>([]);

  ngOnInit():void {
    this.eventList.set(this.cardEventService.getUserEvents())
  }
}
