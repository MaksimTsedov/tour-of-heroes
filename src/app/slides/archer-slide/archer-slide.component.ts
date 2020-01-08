import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/hero';
import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'app-archer-slide',
  templateUrl: '../slide/slide.component.html',
  styleUrls: ['./archer-slide.component.css',
    '../slide/slide.component.css']
})
export class ArcherSlideComponent implements OnInit, SlideComponent {
  backgroundColor: { 'background-color': string; };
  bio = 'This archer will fight them with arrows!';
  hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
