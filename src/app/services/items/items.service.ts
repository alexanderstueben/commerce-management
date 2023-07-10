import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../../types/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<Item[]>('http://localhost:3000/items');
  }
}
