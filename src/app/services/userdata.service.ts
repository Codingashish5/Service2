import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users()
  {
    return[
      {name:'anil',age:20,email:'anil@test.com',password:'anil123'},
      {name:'ajay',age:21,email:'ajay@test.com',password:'ajay123'},
      {name:'sam',age:22,email:'sam@test.com',password:'sam123'},

    ]
  }
}
