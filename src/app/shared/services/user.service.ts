import { Injectable } from '@angular/core';
import {UserType} from "../../../types/user.type";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: UserType[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', active: true },
    { id: 2, name: 'Bob', email: 'bob@example.com', active: false },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', active: true },
    { id: 4, name: 'Diana', email: 'diana@example.com', active: true },
    { id: 5, name: 'Eva', email: 'eva@example.com', active: false },
    { id: 6, name: 'Frank', email: 'frank@example.com', active: false },
    { id: 7, name: 'Grace', email: 'grace@example.com', active: true },
    { id: 8, name: 'Henry', email: 'henry@example.com', active: false },
    { id: 9, name: 'Isabella', email: 'isabella@example.com', active: false },
    { id: 10, name: 'Jack', email: 'jack@example.com', active: true },
    { id: 11, name: 'Kate', email: 'kate@example.com', active: true }
  ];

  constructor() { }

  getUsers(): UserType[] {
    return this.users;
  }
}
