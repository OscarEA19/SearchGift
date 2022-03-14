import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftService } from '../services/gift.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private giftService: GiftService) {

  }

  buscar() {
    const value = this.txtBuscar.nativeElement.value;

    if (value.trim().length === 0) {
      return;
    }

    this.giftService.buscarGift(value);

    this.txtBuscar.nativeElement.value = '';


  }

}
