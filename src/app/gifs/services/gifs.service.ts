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
    if (this._isInvalid(tag)) return;
    this._organizeHistory(tag.trim().toLowerCase());
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
