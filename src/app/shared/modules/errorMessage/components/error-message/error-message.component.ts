import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input("errorMessage") errorMessage: string = "Something Went Wrong!"

  constructor() { }

  ngOnInit(): void {
  }

}
