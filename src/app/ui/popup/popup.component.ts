import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() userData: any;

  @Output() close = new EventEmitter<any>();

  userFrom: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ) {
    this.userFrom = this.fb.group({
      _id: ['', Validators.required],
      name: ['', Validators.required],
      marks: ['', Validators.required],
      percent: ['', Validators.required],
      subjects: this.fb.array([
        this.fb.control('', Validators.required)
      ])
    })
  }

  ngOnInit(): void {
    console.log(this.userData);
    this.userFrom.patchValue({
      _id: this.userData.data._id,
      name: this.userData.data.name,
      marks: this.userData.data.marks,
      percent: this.userData.data.percent,
    })

    const formArray = new FormArray([]);
    for (let x of this.userData.data.subjects) {
      formArray.push(this.fb.control(x));
    }
    this.userFrom.setControl('subjects', formArray);
  }

  get subjects() {
    return this.userFrom.get('subjects') as FormArray;
  }

  addSubject() {
    if (this.subjects.controls.length < 4)
      this.subjects.push(this.fb.control('', Validators.required));
  }

  onSubmit() {
    console.log(this.userFrom.valid);
    console.log(this.userFrom.value);
    this.api.editUser(this.userData.index, this.userFrom.value, () => {
      this.close.next();
    })
  }

}
