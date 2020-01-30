import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Hero } from '../Classes/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../Services/hero.service';
import { HeroClass } from '../Classes/HeroClass.enum';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { SkillFormComponent } from '../skill-form/skill-form.component';
import { SkillService } from '../services/skill.service';
import { FormHelperFunctions } from '../helpers/form-helper-functions';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @ViewChild(SkillFormComponent, { static: false }) skillChild: SkillFormComponent;
  skillForm = this.formBuilder.group({
    skills: this.formBuilder.array([])
  })

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private skillService: SkillService,
    private location: Location,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  get skills() { return this.skillForm.controls.skills as FormArray }

  getHero(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    if (id !== 0) {
      this.heroService.getHero(id)
        .subscribe(hero => { this.hero = hero; this.pullSkills() });
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
    let skillArr = FormHelperFunctions.getSkillsArray(this.skillForm.get('skills') as FormArray);
    if (skillArr.length > 0) {
      this.hero.skills = skillArr;

      skillArr.forEach(skill =>
        this.skillService.addSkill(skill).subscribe())
    }

    if (this.hero.id) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    } else {
      this.hero.heroClass = HeroClass[this.hero.heroClass];
      this.heroService.addHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  private pullSkills(): void {
    if (this.hero.id && this.hero.skills) {
      if (this.hero.skills.length > 0) {
        this.hero.skills.forEach(skill => this.skills.push(
          this.formBuilder.group({
            naming: [skill.naming, Validators.required],
            description: [skill.description, [Validators.required, Validators.maxLength(500)]],
            level: [skill.level, [Validators.min(1), Validators.max(10)]]
          })));
      }
    }
  }
}
