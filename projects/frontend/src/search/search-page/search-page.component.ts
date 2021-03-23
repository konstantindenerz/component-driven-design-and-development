import {Component} from '@angular/core';
import {SearchService} from './search.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'search-page',
  templateUrl: 'search-page.component.html',
  styleUrls: ['search-page.component.scss']
})

export class SearchPageComponent {
  value: string;
  items: Observable<any>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private searchService: SearchService) {
    this.search();
  }

  search(): void {
    this.items = this.searchService.search(this.value);
  }
}
