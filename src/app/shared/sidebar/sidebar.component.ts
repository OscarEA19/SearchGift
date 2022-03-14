import { Component } from '@angular/core';
import { GiftService } from 'src/app/gift/services/gift.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent {

  get historial(): string[] {
    return this.giftService.historial;
  }

  agregar(title: string) {
    this.giftService.buscarGift(title);
  }

  constructor(private giftService: GiftService) {

  }

}
