import { Component, OnInit } from '@angular/core';
import { User, UserListResult } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  apiResult!: UserListResult;
  perPage: number = 5;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  public loadUsers(page = 1) {
    console.log(this.perPage)
    this.userService
    .getAll(page, this.perPage)
    
    .subscribe( (result: UserListResult) => {
      console.log(result);
      this.apiResult = result;
    });
  }

  public pages(qtd: number) {
    return new Array(qtd).keys();
  }
}
