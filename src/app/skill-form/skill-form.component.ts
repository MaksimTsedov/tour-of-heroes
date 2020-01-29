import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Skill } from '../Classes/skill';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {
  @Input() heroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  get skills() { return this.heroForm.controls.skills as FormArray }

  onAddSkill() {
    if (this.skills.length < 5) {
      this.skills.push(this.createSkillForm());
    }
  }
  
  trackById (index, item: Skill) {
    return item.id;
  }

  private createSkillForm() : FormGroup {
    return this.formBuilder.group({
      naming: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      level: [,[Validators.min(1), Validators.max(10)]]
    });
  }
}
