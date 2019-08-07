import { Component, OnInit } from '@angular/core';

import { CategoryService } from './category.service';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.scss']
})
export class CategoryBarComponent implements OnInit {

  categories;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

}
