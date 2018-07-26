import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RestProvider {
  apiUrl = "http://www.eudc-app.com";
  loadTournamentsURL = "http://www.eudc-app.com/debate/tournament/get-all";

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  // Fetches all tournaments. 
  // Return: array of Tournaments wrapped in a Promise
  getAllTournaments() {
    return new Promise(resolve => {
      this.http.get(this.loadTournamentsURL).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // Fetches user by id.
  // Params: user id
  // Return: User wrapped in a Promise
  getUserById(id) {

  }

  // Fetches users associated to a unique tabbyCat URL
  // Params: url
  // Return: array of Users (one or two) wrapped in a Promise
  getUsersByUrl(url) {

  }

  // Fetches three current/upcoming events
  // Params: tournament id, current time
  // Return: array of 3 Events wrapped in a Promise
  getHomepageEvents(id, time) {

  }

  // Fetches the schedule of a tournament
  // Params: tournament id
  // Return: array of Events wrapped in a Promise
  getSchedule(id) {

  }

}
