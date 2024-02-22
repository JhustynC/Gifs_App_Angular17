import { Component, Input } from '@angular/core';
import { IDataGif } from '../../interfaces/gifs-response-interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  @Input() gifsList: IDataGif[] = []
}
