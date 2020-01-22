import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HeroService } from '../Services/hero.service';
import { HeroClass } from '../Classes/HeroClass.enum';
import { Hero } from '../Classes/Hero';

@Component({
  selector: 'app-heroes-add-reactive',
  templateUrl: './heroes-add-reactive.component.html',
  styleUrls: ['./heroes-add-reactive.component.css']
})
export class HeroesAddReactiveComponent implements OnInit {
  heroForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    alterEgo: [''],
    character: this.formBuilder.group({
      heroClass: [],
      isEvil: []
    })
  })


  constructor(private heroService: HeroService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  setCustomName() {
    this.heroForm.patchValue({
      name: 'Crownsail',
      character: {
        isEvil: true
      }
    });
  }

  onSubmit() {
    const hero = new Hero();
    hero.name = this.heroForm.get('name').value;
    hero.alterEgo = this.heroForm.get('alterEgo').value;

    const characterControl = this.heroForm.get('character') as FormGroup;
    hero.isEvil = characterControl.get('isEvil').value;
    hero.heroClass = characterControl.get('heroClass').value;
    this.heroService.addHero(hero)
      .subscribe();
  }

  getHeroClasses(): string[] {
    return this.heroService.getHeroesClasses();
  }
}
