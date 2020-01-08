import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/hero';
import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'app-priest-slide',
  templateUrl: '../slide/slide.component.html',
  styleUrls: ['./priest-slide.component.css',
    '../slide/slide.component.css']
})
export class PriestSlideComponent implements OnInit, SlideComponent {
  backgroundColor: { 'background-color': string; };
  bio = 'This priest will heal up everyone!';
  hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
