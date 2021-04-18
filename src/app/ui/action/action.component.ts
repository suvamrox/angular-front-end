import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  @Input() index: any;
  @Input() data: any;

  @Output() editUser = new EventEmitter<any>();
  @Output() deleteUser = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit(): void {
  }

  edit(i, d) {
    this.editUser.emit({
      index: i,
      data: d
    })
  }

  delete(i, d) {
    this.deleteUser.emit({
      index: i,
      data: d
    })
  }
}
