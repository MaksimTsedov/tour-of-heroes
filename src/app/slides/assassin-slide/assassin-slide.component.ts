import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/hero';
import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'app-assassin-slide',
  templateUrl: '../slide/slide.component.html',
  styleUrls: ['./assassin-slide.component.css',
    '../slide/slide.component.css']
})
export class AssassinSlideComponent implements OnInit, SlideComponent {
  backgroundColor: { 'background-color': string; };
  bio = 'This assassin will fulfill any contract!';
  hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
