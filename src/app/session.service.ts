import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private loggedIn = false;
  private username: string | null = null;

  setLoggedIn(value: boolean): void {
    this.loggedIn = value;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setUsername(username: string | null): void {
    this.username = username;
  }

  getUsername(): string | null {
    return this.username;
  }
}
