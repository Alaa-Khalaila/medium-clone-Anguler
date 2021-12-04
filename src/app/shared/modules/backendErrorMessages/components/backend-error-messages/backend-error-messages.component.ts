import { Component, Input, OnInit } from '@angular/core';
import { BackendErrors } from 'src/app/shared/types/backend-errors.interface';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss']
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input() backendErrors:BackendErrors;

  errorMessages:string[]

  constructor() { }

  ngOnInit(): void {
    console.log(this.backendErrors);
    
    this.errorMessages = Object.keys(this.backendErrors).map(name=>{
    return `${name} ${this.backendErrors[name].join(" ")}`
    })
  }
}
