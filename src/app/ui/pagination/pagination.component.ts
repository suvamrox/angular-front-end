import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() data: any;
  @Output() navPress = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  next(p, l) {
    console.log(this.data);
    this.navPress.emit({
      page: p,
      limit: l
    });
  }

  prev() {

  }

}
