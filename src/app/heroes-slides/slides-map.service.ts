import { Injectable } from '@angular/core';
import { SlideItem } from '../SlideItem';
import { WarriorSlideComponent } from '../slides/warrior-slide/warrior-slide.component';
import { HeroClass } from '../HeroClass.enum';
import { ArcherSlideComponent } from '../slides/archer-slide/archer-slide.component';
import { MageSlideComponent } from '../slides/mage-slide/mage-slide.component';
import { AssassinSlideComponent } from '../slides/assassin-slide/assassin-slide.component';
import { PriestSlideComponent } from '../slides/priest-slide/priest-slide.component';

@Injectable({
  providedIn: 'root'
})
export class SlidesMapService {

  getComponentMap() {
    return [
      new SlideItem(WarriorSlideComponent, HeroClass.Warrior),
      new SlideItem(ArcherSlideComponent, HeroClass.Archer),
      new SlideItem(MageSlideComponent, HeroClass.Mage),
      new SlideItem(AssassinSlideComponent, HeroClass.Assassin),
      new SlideItem(PriestSlideComponent, HeroClass.Priest)
    ];
  }

}
