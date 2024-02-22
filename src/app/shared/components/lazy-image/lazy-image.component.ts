import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent {
  @Input() public url!: string;
  @Input() public alt: string = '';

  private _hasLoader: boolean = false;

  get HasLoader(): boolean {
    return this._hasLoader;
  }

  onLoad() {
    console.log('Image Load');
    this._hasLoader = true;
  }

  ngOnInit() {
    if (!this.url) {
      throw new Error('Property URL is required');
    }
  }
}
