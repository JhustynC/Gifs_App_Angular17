import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <div class="d-flex">
      <h5 class="m-2">Buscar:</h5>
      <input
        type="text"
        class="form-control"
        placeholder="Buscar gifs"
        (keyup.enter)="searchTag()"
        #txtTagInput
      />
    </div>
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput') tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
