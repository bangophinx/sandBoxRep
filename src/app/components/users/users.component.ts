import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/iuser';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {
  users: Iuser[];
  showUserForm: boolean = false;
  user: Iuser = {
    fName: "",
    lName: "",
    email: "",
    joined: new Date()
  };

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      users.forEach(user => {
        user.hide = false;
      }),
        this.users = users
    }
    );
    console.log(this.users);
  }

  addUser() {
    this.userService.addUser(this.user).subscribe(user =>
      this.users.push(user));
  }


}
