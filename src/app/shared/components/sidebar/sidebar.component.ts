import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private gifsSevice: GifsService) {}

  get tagHistory(): string[] {
    return this.gifsSevice.tagsHistory;
  }

  public resarchTag(tag:string): void{
    this.gifsSevice.searchTag(tag);
  }

}
