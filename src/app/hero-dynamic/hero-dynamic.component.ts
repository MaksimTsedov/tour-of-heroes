import { Component, OnInit } from '@angular/core';
import { HeroFormDataService } from '../Services/hero-form-data.service';
import { Hero } from '../Classes/Hero';
import { HeroService } from '../Services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-dynamic',
  templateUrl: './hero-dynamic.component.html',
  styleUrls: ['./hero-dynamic.component.css'],
  providers: [HeroFormDataService]
})
export class HeroDynamicComponent implements OnInit {
  questions: any[];
  constructor(private heroDataService: HeroFormDataService,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit() {
    this.questions = this.heroDataService.getHeroData();
  }

  onSubmit(formControls: { key: string, value: any }[]) {
    const hero = new Hero();

    const getControlValue = function (key: string) { return formControls.find(item => item.key === key).value; }

    hero.name = getControlValue('name');
    hero.alterEgo = getControlValue('alterEgo');
    hero.isEvil = !!getControlValue('isEvil');
    hero.heroClass = getControlValue('heroClass');

    this.heroService.addHero(hero)
      .subscribe();

    this.location.back();
  }
}
