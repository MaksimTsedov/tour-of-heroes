import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { HeroService } from '../Services/hero.service';
import { Hero } from '../Classes/Hero';
import { Location } from '@angular/common';
import { dividedNamesValidator } from '../Validators/divided-names.directive';
import { Skill } from '../Classes/Skill';

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
    }),
    skills: this.formBuilder.array([])
  }, { validators: dividedNamesValidator})


  constructor(private heroService: HeroService,
    private formBuilder: FormBuilder,
    private location: Location) { }

  ngOnInit() {
  }

  get skills() { return this.heroForm.controls.skills as FormArray }

  onAddSkill() {
    if (this.skills.length < 6) {
      this.skills.push(this.createSkillForm());
    }
  }

  private createSkillForm() : FormGroup {
    return this.formBuilder.group({
      naming: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      level: [,[Validators.min(1), Validators.max(10)]]
    });
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

    this.location.back();
  }

  trackById (index, item: Skill) {
    return item.id;
  }

  getHeroClasses(): string[] {
    return this.heroService.getHeroesClasses();
  }
}
