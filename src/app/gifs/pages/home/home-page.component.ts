import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { IDataGif } from '../../interfaces/gifs-response-interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) {}

  get Gifs(): IDataGif[]{
    return this.gifsService.listGifs;
  }
}
