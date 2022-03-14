import { Component } from '@angular/core';
import { GiftService } from '../services/gift.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get resultados() {
    return this.giftService.resultados;
  }

  constructor(private giftService: GiftService) {

  }

}
