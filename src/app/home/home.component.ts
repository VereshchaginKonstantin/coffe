
import { Component, OnInit } from '@angular/core';
import { User } from '../common/dto/user';
import { UserService } from '../common/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // get users from secure api end point
    this.userService.getUsers()
      .then(users => this.users = users);
  }

}
