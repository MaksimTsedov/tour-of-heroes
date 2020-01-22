import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/Classes/Hero';
import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'app-assassin-slide',
  templateUrl: '../slide/slide.component.html',
  styleUrls: ['./assassin-slide.component.css',
    '../slide/slide.component.css']
})
export class AssassinSlideComponent extends SlideComponent implements OnInit  {
  bio = 'This assassin will fulfill any contract!';

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  setCurrentClasses(): void {
    this.currentClasses = [ 'hero-profile', 'assassin-slide-background' ];
  }
}
