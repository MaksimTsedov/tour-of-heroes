import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/Classes/hero';
import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'app-mage-slide',
  templateUrl: '../slide/slide.component.html',
  styleUrls: ['./mage-slide.component.css',
    '../slide/slide.component.css']
})
export class MageSlideComponent extends SlideComponent implements OnInit  {
  bio = 'This mage will destroy everyone with his power of Universe!';

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  setCurrentClasses(): void {
    this.currentClasses = [ 'hero-profile', 'mage-slide-background' ];
  }
}
