import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/Classes/hero';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() hero: Hero;
  bio = 'default bio';
  currentClasses: string[];
  constructor() { }

  ngOnInit() {
    this.setCurrentClasses();
  }

  setCurrentClasses() {
    this.currentClasses = [ 'hero-profile', 'slide-background' ];
  }
}
