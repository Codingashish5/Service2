import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service in angular';
  users: any;
  memberData = [
    { name: 'anil', email: 'anil@test.com', password: 'anil123' },
    { name: 'vijay', email: 'vijay@test.com', password: 'vijay123' },
    { name: 'ajay', email: 'ajay@test.com', password: 'ajay123' },
    { name: 'rohan', email: 'rohan@test.com', password: 'rohan123' },
    { name: 'daksh', email: 'daksh@test.com', password: 'daksh123' },
  ]
  constructor(private userdata: UserdataService)
   {
    console.log("userdata", userdata.users)
    this.users = userdata.users();
    userdata.users().subscribe((data:any) =>{ 
      console.log("data", data);
    })
  }
}
