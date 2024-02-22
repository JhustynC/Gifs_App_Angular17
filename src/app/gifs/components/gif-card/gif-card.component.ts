import { Component, Input } from '@angular/core';
import { IDataGif } from '../../interfaces/gifs-response-interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gif-card.component.html',
})
export class GifCardComponent  {
  @Input() gif!: IDataGif;

  ngOnInit() {
    if (!this.gif) {
      throw new Error('Gif property is undefined')
    }
  }
}
