import { Component, OnInit } from '@angular/core';
import { User, UserListResult } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService
      .getAll()
      .subscribe( (result: UserListResult) => {
        console.log(result);
        this.users = result.data;
      } );
  }



}
