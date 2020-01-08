import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'app-warrior-slide',
  templateUrl: '../slide/slide.component.html',
  styleUrls: ['./warrior-slide.component.css',
    '../slide/slide.component.css']
})
export class WarriorSlideComponent implements OnInit, SlideComponent {
  backgroundColor: { 'background-color': 'red'; };
  bio = 'This warrior will crush everyone with his sword!';
  hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}