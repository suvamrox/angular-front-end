import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'https://test.cherishiot.com'; //'http://localhost:3000';

  public UserListChangeEvent: Subject<any> = new Subject<any>();
  public EditUserEvent: Subject<any> = new Subject<any>();


  constructor(
    private http: HttpClient
  ) { }

  getUser(page = 1, lmt = 30) {
    this.http.get(`${this.url}/admin/user?page=${page}&limit=${lmt}`).subscribe(
      (data) => {
        this.UserListChangeEvent.next(data);
      },
      (err) => {
        console.log(err);

      }
    )
  }

  public editUser(i, data, cb) {
    this.http.patch(`${this.url}/admin/user`, data).subscribe(
      (req) => {
        this.EditUserEvent.next({
          index: i,
          data
        })
        cb();
      },
      (err) => {
        console.log(err);
        alert(err);
      }
    )
  }


  public deleteUser(i, data, cb) {
    this.http.delete(`${this.url}/admin/user/${data._id}`).subscribe(
      (req) => {
        cb(i);
      },
      (err) => {
        console.log(err);
        alert(err);
      }
    )
  }


  logIn(data, cb) {
    this.http.post(`${this.url}/admin/logIn`, data).subscribe(
      (res) => {
        cb(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
