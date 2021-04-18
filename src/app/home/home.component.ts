import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { ApiService } from '../service/api.service';
import { JWTTokenService } from '../service/jwttoken.service';
import { PopupService } from '../service/popup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[] = [];
  paginationData: any;

  constructor(
    public popup: PopupService,
    private api: ApiService,
    private jwt: JWTTokenService,
    private router: Router
  ) {
    this.api.UserListChangeEvent.subscribe((data) => {
      console.log(data);
      this.users = data.list;
      this.paginationData = data;
    });

    api.EditUserEvent.subscribe((newUserDataWithIndex) => {
      this.users[newUserDataWithIndex.index] = newUserDataWithIndex.data;
    });
  }

  ngOnInit(): void {
    this.api.getUser();
  }

  nextPress(e) {
    console.log(e);
    this.api.getUser(e.page, e.limit);
  }

  editUser(e) {
    console.log("edit user");
    console.log(e);
    this.popup.showAsElement(e);
  }

  deleteUser(e) {
    console.log("delete user");
    console.log(e);
    this.api.deleteUser(e.index, e.data, () => {
      this.users.splice(e.index, 1);
    })
  }

  logout() {
    this.jwt.removeToken('token');
    this.router.navigateByUrl('/login')
  }

}
