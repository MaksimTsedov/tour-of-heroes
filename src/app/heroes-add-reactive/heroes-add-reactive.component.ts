import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { HeroService } from '../Services/hero.service';
import { Hero } from '../Classes/hero';
import { Location } from '@angular/common';
import { dividedNamesValidator } from '../Validators/divided-names.directive';
import { SkillService } from '../services/skill.service';
import { FormHelperFunctions } from '../helpers/form-helper-functions';

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
  }, { validators: dividedNamesValidator })

  constructor(private heroService: HeroService,
    private skillService: SkillService,
    private formBuilder: FormBuilder,
    private location: Location) { }

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
    let skillArr = FormHelperFunctions.getSkillsArray(this.heroForm.get('skills') as FormArray);
    if (skillArr.length > 0) {
      hero.skills = skillArr;

      skillArr.forEach(skill =>
        this.skillService.addSkill(skill).subscribe())
    }

    this.heroService.addHero(hero)
      .subscribe();

    this.location.back();
  }

  getHeroClasses(): string[] {
    return this.heroService.getHeroesClasses();
  }

}


