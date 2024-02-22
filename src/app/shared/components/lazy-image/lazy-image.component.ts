import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent {
  @Input() public url!: string;
  @Input() public alt: string = '';


  public imageLoader: string =  'assets/loader.svg';

  private _hasLoader: boolean = false;

  get HasLoader(): boolean {
    return this._hasLoader;
  }

  onLoad() {
    setTimeout(() =>{
      this._hasLoader = true;
    }, 1000)
  }

  ngOnInit() {
    if (!this.url) {
      throw new Error('Property URL is required');
    }
  }
}
