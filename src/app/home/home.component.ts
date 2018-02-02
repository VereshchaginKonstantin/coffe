
import { Component, OnInit } from '@angular/core';
import { User } from '../common/dto/user';
import { UserService } from '../common/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
    // get users from secure api end point
  }

}
