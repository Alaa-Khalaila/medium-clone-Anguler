import { Component, Input, OnInit } from '@angular/core';
import { BackendErrors } from 'src/app/shared/types/backend-errors.interface';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss']
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input() backendErrors:BackendErrors;

  constructor() { }

  ngOnInit(): void {
    const errors = Object.keys(this.backendErrors).map(name=>{
    return `${name} ${this.backendErrors[name].join(" ")}`
    })
  }

}
