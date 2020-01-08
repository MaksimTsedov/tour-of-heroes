import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/hero';
import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'app-mage-slide',
  templateUrl: '../slide/slide.component.html',
  styleUrls: ['./mage-slide.component.css',
    '../slide/slide.component.css']
})
export class MageSlideComponent implements OnInit, SlideComponent {
  backgroundColor: { 'background-color': string; };
  bio = 'This mage will destroy everyone with his power of Universe!';
  hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
