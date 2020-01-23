import { Component, OnInit } from '@angular/core';
import { QuestionControlService } from '../Services/question-control.service';
import { HeroFormDataService } from '../Services/hero-form-data.service';

@Component({
  selector: 'app-hero-dynamic',
  templateUrl: './hero-dynamic.component.html',
  styleUrls: ['./hero-dynamic.component.css'],
  providers: [HeroFormDataService]
})
export class HeroDynamicComponent implements OnInit {
  questions: any[];
  constructor(private heroDataService: HeroFormDataService) { }

  ngOnInit() {
    this.questions = this.heroDataService.getHeroData();
  }

}
