import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({ // Injectable meta data
  providedIn: 'root' // inject the service at the root level, making it available everywhere it is requested
})
export class HeroService {

  // MessageService injection
  constructor(private messageService: MessageService) { }

  // Returns an Observable<Hero[]> that emits a single value, the array of mock heroes
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
