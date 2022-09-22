import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl = 'https://tweet-app-backend246.azurewebsites.net/api/v1.0/tweets';
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get("https://tweet-app-backend246.azurewebsites.net/api/v1.0/tweets/users/all");
  }
  loginUser(user: Login) {
    return this.http.get("https://tweet-app-backend246.azurewebsites.net/api/v1.0/tweets/login?emailId=" + user.userId + "&password=" + user.password);
  }
  forgotPassword(user: Login) {
    return this.http.get("https://tweet-app-backend246.azurewebsites.net/api/v1.0/tweets/forgot?userName=" + user.userId + "&newPassword=" + user.password);
  }
  registserUser(user: Users) {
    return this.http.post<any>("https://tweet-app-backend246.azurewebsites.net/api/v1.0/tweets/register", user);
  }

}
