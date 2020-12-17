import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionSessionsService {
  constructor() {}

  isConnect() {
    if (sessionStorage.getItem('username') == null) return false;
    return true;
  }
}
