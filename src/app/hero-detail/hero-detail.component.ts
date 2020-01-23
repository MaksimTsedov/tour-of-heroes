import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Classes/Hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../Services/hero.service';
import { HeroClass } from '../Classes/HeroClass.enum';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    if (id !== 0) {
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    } else {
      this.hero = new Hero();
    }
  }

  getHeroName(): string {
    if (this.hero.name) {
      return this.hero.name;
    } else {
      return `New hero`;
    }
  }

  getHeroClasses(): string[] {
    return this.heroService.getHeroesClasses();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero.id) {
      this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
    } else {
      this.hero.heroClass = HeroClass[this.hero.heroClass];
      this.heroService.addHero(this.hero)
      .subscribe(() => this.goBack());
    }
  }
}
