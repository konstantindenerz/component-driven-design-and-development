import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class SearchService {
  search(queryText): Observable<any[]> {
    throw new Error('not implemented');
  }
}
