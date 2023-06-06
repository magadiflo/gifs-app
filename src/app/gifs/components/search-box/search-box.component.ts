import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @ViewChild("search") search!: ElementRef<HTMLInputElement>;

  searchTag(): void {
    console.log(this.search.nativeElement.value);
  }

}
