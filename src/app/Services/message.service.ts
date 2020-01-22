import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  lastMessage: string;

  add(message: string) {
    this.messages.push(message);
    this.setLastMessage();
  }

  clear() {
    this.messages = [];
  }

  setLastMessage() {
    this.lastMessage =
      this.messages[this.messages.length - 1];
  }
}
