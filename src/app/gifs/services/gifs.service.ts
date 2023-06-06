import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagHistory: string[] = [];

  public get tagHistory(): string[] {
    return [...this._tagHistory];
  }

  constructor() { }

  searchTag(tag: string): void {
    this._tagHistory.unshift(tag);
  }
}
