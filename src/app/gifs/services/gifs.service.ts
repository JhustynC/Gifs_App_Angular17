import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMain } from '../interfaces/gifs-response-modelo';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagHistory: string[] = [];
  private _apiKey: string = 'QyKJrFYzZGtyMofFILHb5ODvcJiLWoMu';
  private _serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {}

  get tagsHistory() {
    return [...this._tagHistory];
  }

  public searchTag(tag: string): void {
    //Validaciones
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    //QueryParameters
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', tag);

    //Peticiones
    this.http
      .get<IMain>(`${this._serviceUrl}/search`, { params: params })
      .subscribe({
        next: (resp) => resp.data.forEach((g) => console.log(g.url)),
        error: (err) => console.error(err),
        complete: () => console.info('Complete'),
      });
  }

  private organizeHistory(tag: string): void {
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((t) => t !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
  }
}
