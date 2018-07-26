import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RestProvider {
  apiUrl = "http://www.eudc-app.com";
  loadTournamentsURL = "http://www.eudc-app.com/debate/tournament/get-all";

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  loadTournaments() {

  	// let response = await this.http.get(this.loadTournamentsURL).toPromise();
  	// console.log(response);
  	// return response;

    // let response = await this.http.get(this.loadTournamentsURL).toPromise()
    //                               .map(res => res.json().results)
    //                               .subscribe(
    //                                 (res)=> {
    //                                   console.log(res)
    //                                 },
    //                                 (err)=>{
    //                                 }
    //                               );
    // return response;


    return new Promise(resolve => {
      this.http.get(this.loadTournamentsURL).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });


    // return [
    //   {expanded: false, name: "Belgrade Open"},
    //   {expanded: false, name: "Novi Sad EUDC"},
    //   {expanded: false, name: "Lorem Ipsum IV"},
    //   {expanded: false, name: "Amet Open"},
    // ];
  }

}
