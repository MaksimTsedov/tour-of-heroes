import {
  Component, OnInit, Input,
  ViewChild, ComponentFactoryResolver
} from '@angular/core';
import { Hero } from '../Classes/hero';
import { SlideDirective } from './slide.directive';
import { SlidesMapService } from '../Services/slides-map.service';
import { SlideComponent } from '../slides/slide/slide.component';


@Component({
  selector: 'app-heroes-slides',
  templateUrl: './heroes-slides.component.html',
  styleUrls: ['./heroes-slides.component.css']
})
export class HeroesSlidesComponent implements OnInit {
  @Input() heroes: Hero[];
  @ViewChild(SlideDirective, { static: true }) slideHost: SlideDirective;
  currentHeroIndex = -1;

  constructor(private resolver: ComponentFactoryResolver,
              private slideMap: SlidesMapService) { }

  ngOnInit() {
    this.changeHeroSlide(true);
  }

  changeHeroSlide(next: boolean) {
    if (next) {
      this.currentHeroIndex = (this.currentHeroIndex + 1) % this.heroes.length;
    } else {
      this.currentHeroIndex = this.currentHeroIndex === 0 ?
        this.heroes.length - 1 :
        (this.currentHeroIndex - 1) % this.heroes.length;
    }

    const hero = this.heroes[this.currentHeroIndex];
    const heroComponent = this.slideMap.getComponentMap();
    const finds = heroComponent.find(slide => slide.heroClass === hero.heroClass);
    const dddd = finds
    .component;

    const componentFactory = this.resolver.resolveComponentFactory(dddd);
    const viewcontainerRef = this.slideHost.viewContainerRef;
    viewcontainerRef.clear();

    const component = viewcontainerRef.createComponent(componentFactory);
    (component.instance as SlideComponent).hero = hero;
  }
}
