import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersdataService {
  url="http://localhost:4200/";

  constructor(private http:HttpClient) { }
  users()
  {
    return this.http.get(this.url);
  }
}
