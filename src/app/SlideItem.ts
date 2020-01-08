import { Type } from '@angular/core';
import { HeroClass } from './HeroClass.enum';

export class SlideItem {
    constructor(public component: Type<any>, public heroClass: HeroClass) {}
}
