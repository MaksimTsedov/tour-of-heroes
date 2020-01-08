import { Pipe, PipeTransform } from '@angular/core';
import { HeroClass } from './HeroClass.enum';

@Pipe({
  name: 'getHeroClass'
})
export class GetClassPipe implements PipeTransform {

  transform(value: number): any {
    return HeroClass[value];
  }

}
