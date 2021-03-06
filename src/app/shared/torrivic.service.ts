import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { Task } from "../shared/task";
import { configuration } from "../shared/configuration";
import { User } from "../model/User";
import { map } from "rxjs/operators";


@Injectable()
export class TorrivicService {

  constructor(private _http: HttpClient) { }


  // static data

  batter: any = [
    { "id": 1001, "type": "Regular" },
    { "id": 1002, "type": "Chocolate" },
    { "id": 1003, "type": "Blueberry" },
    { "id": 1004, "type": "Devil's Food" }
  ]

  getBatters = function () {
    return this.batter;
  }


  // http service

  users: User[];
  singleUser: any;

getUsers() : Observable<User[]>{
  return this._http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
  map((response) => this.users = response))
}

getUserbyId(id : number){
  return this._http.get('https://jsonplaceholder.typicode.com/users').subscribe(res => {
      this.singleUser = res.find(x => x.id == id);
    })
};



// -------------------------------------------------------------------------------------

// Task Manager

  task : Task;

  tasks : Task[] = [
    {
  id: 1,
  name: "full-range",
  description: "T1-T6 level with complete lesion of spinal cord"
}, {
  id: 2,
  name: "budgetary management",
  description: "Letterer-siwe disease, lymph nodes of head, face, and neck"
}, {
  id: 3,
  name: "Mandatory",
  description: "Closed fracture of unspecified bone(s) of foot [except toes]"
}, {
  id: 4,
  name: "foreground",
  description: "Accidental poisoning by agents primarily affecting gastrointestinal system"
}, {
  id: 5,
  name: "algorithm",
  description: "Closed fracture of T1-T6 level with central cord syndrome"
}
  ];

  getTasks(){
    return this.tasks;
  }

  addTask(entity : Task){
    entity.id = this.tasks[this.tasks.length-1].id + 1; // last id in array and add 1 
    this.tasks.push(entity);
  }


  getSingleTask(id : number){
  this.task = this.tasks.filter(x => x.id == id)[0];
    return this.task;
  }

  updateTask(entity : Task){
    let updatedItem = this.tasks.filter(x => x.id == entity.id)[0];
    updatedItem.name = entity.name;
    updatedItem.description = entity.description;
    return updatedItem; 
  }

  removeTask(id : number){
     this.tasks.splice(this.tasks.findIndex(x => x.id == id), 1);
  }


    // ---------------------------> Configuration Service <---------------------------

conFig = configuration;

  getSection(id : number){
  return this.conFig.socialsites.filter(x => x.id == id)[0];
  }


}