import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

const GIPHY_API_KEY = '3ZFhGljhvA8ctX3W29sNy5xCrjAqBwLE';
const GIF_URL = 'https://api.giphy.com/v1/gifs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagHistory: string[] = [];

  public gifList: Gif[] = [];
  public get tagHistory(): string[] {
    return [...this._tagHistory];
  }

  constructor(private _http: HttpClient) { }

  searchTag(tag: string): void {
    if (this._isInvalid(tag)) return;
    this._organizeHistory(tag.trim().toLowerCase());

    const params = new HttpParams()
      .set("api_key", "3ZFhGljhvA8ctX3W29sNy5xCrjAqBwLE")
      .set("q", tag)
      .set("limit", 10);

    this._http.get<SearchResponse>(`${GIF_URL}/search`, { params })
      .subscribe(resp => this.gifList = resp.data);
  }

  private _organizeHistory(tag: string): void {
    if (this._tagExist(tag)) {
      this._tagHistory = this._tagHistory.filter(oldTag => oldTag !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._limitHistory();
  }

  private _tagExist(tag: string): boolean {
    return this._tagHistory.includes(tag);
  }

  private _limitHistory(): string[] {
    return this._tagHistory.splice(0, 10);
  }

  private _isInvalid(tag: string): boolean {
    return !tag || tag.trim().length === 0;
  }
}
