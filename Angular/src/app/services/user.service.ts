import { Injectable } from '@angular/core';
import { users } from '../users';

/**
 * Represents a user
 */
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthDate?: string;
  phoneNumber?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  /**
   * Retrieves a list of all users.
   *
   * @returns {User[]} An array of User objects representing all users.
   */
  getUsers(): User[] {
    return users;
  }
}
