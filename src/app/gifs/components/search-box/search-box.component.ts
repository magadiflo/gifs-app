import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @ViewChild("search") search!: ElementRef<HTMLInputElement>;

  constructor(private _gifsService: GifsService) { }

  searchTag(): void {
    const newTag = this.search.nativeElement.value;
    if (!newTag || newTag.trim().length === 0) return;

    this._gifsService.searchTag(newTag.trim());
    this.search.nativeElement.value = '';
  }

}
