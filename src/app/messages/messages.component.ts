import { Component, OnInit } from '@angular/core';

import { MessageService } from './../message.service';

@Component({
  selector: 'as-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
