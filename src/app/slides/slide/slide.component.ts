import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() hero: Hero;
  bio = 'default bio';
  backgroundColor = { 'background-color' : 'lightgreen' };
  constructor() { }

  ngOnInit() {
  }

}
