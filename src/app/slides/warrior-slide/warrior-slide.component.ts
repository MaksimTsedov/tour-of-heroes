import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/Classes/hero';
import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'app-warrior-slide',
  templateUrl: '../slide/slide.component.html',
  styleUrls: ['./warrior-slide.component.css',
    '../slide/slide.component.css']
})
export class WarriorSlideComponent extends SlideComponent implements OnInit  {
  bio = 'This warrior will crush everyone with his sword!';

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  setCurrentClasses() {
    this.currentClasses = [ 'hero-profile', 'warrior-slide-background' ];
  }
}
