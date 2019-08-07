import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories = ["explicit", "nerdy"];

  getCategories() {
    return this.categories;
  }

  constructor() { }
}
