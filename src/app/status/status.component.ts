import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../common/authentication.service';
import { User } from '../common/dto/user';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  user: string;

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
    this.user = this.authService.GetUser();
  }

}
