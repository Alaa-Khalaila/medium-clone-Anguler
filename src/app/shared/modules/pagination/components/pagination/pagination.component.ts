import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input("total") total: number;
  @Input("limit") limit: number;
  @Input("url") url: string;
  @Input("currentPage") currentPage: number;

  pagesCount: number;
  pages: number[]

  constructor() { }

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.range(this.pagesCount)
  }

  range(end: number, startAt = 1) {
    return [...Array(end).keys()].map(i => i + startAt);
  }
}
