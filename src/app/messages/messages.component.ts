import { Component, OnInit, OnChanges } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  logImageUrl = '../../assets/unfolded-scroll.png';
  hiddenLog = false;
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

  switchLogMode() {
    if (!this.hiddenLog) {
      this.logImageUrl = '../../assets/rolled-scroll.png';
    } else {
      this.logImageUrl = '../../assets/unfolded-scroll.png';
    }

    this.hiddenLog = !this.hiddenLog;
  }
}
