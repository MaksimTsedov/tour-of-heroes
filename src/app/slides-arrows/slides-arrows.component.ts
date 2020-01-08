import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slides-arrows',
  templateUrl: './slides-arrows.component.html',
  styleUrls: ['./slides-arrows.component.css']
})
export class SlidesArrowsComponent implements OnInit {
 @Output() toChangeSlide = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  changeSlide(value: boolean) {
    this.toChangeSlide.emit(value);
  }
}
