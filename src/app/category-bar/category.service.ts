import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories = ['ALL', 'nerd', 'ex'];

  getCategories() {
    return this.categories;
  }

  constructor() { }
}
