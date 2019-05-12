import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable({ // Injectable meta data
  providedIn: 'root' // inject the service at the root level, making it available everywhere it is requested
})
export class HeroService {

  constructor() { }
  getHeroes(): Hero[] {
    return HEROES;
  }
}
