import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private user: UserServiceService) { }
  get: any;
  ngOnInit() {
    this.user.getAllUsers().subscribe(
      (response) => {
        this.get = response;
        // console.log(response);
        // console.log(JSON.stringify(this.get));
      },
      (error) => { console.log(error); });
  }

}