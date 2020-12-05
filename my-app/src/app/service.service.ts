import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

  callmockAPI() {
    console.warn('API is Called');
  }
}
