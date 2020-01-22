import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../Classes/Hero';
import { Injectable } from '@angular/core';
import { HeroClass } from '../Classes/HeroClass.enum';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', heroClass: HeroClass.Warrior, isEvil: false, alterEgo: "Dr.Dre" },
      { id: 12, name: 'Narco', heroClass: HeroClass.Archer, isEvil: false },
      { id: 13, name: 'Bombasto', heroClass: HeroClass.Mage, isEvil: false },
      { id: 14, name: 'Celeritas', heroClass: HeroClass.Mage, isEvil: true, alterEgo: "Mistress" },
      { id: 15, name: 'Magneta', heroClass: HeroClass.Assassin, isEvil: true },
      { id: 16, name: 'RubberMan', heroClass: HeroClass.Priest, isEvil: false },
      { id: 17, name: 'Dynama', heroClass: HeroClass.Warrior, isEvil: true, alterEgo: "Shari" },
      { id: 18, name: 'Dr IQ', heroClass: HeroClass.Archer, isEvil: false },
      { id: 19, name: 'Magma', heroClass: HeroClass.Warrior, isEvil: false, alterEgo: "Ice3" },
      { id: 20, name: 'Tornado', heroClass: HeroClass.Archer, isEvil: true }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
