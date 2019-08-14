import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JokesService } from './jokes.service';

@Component({
  selector: 'app-display-jokes',
  templateUrl: './display-jokes.component.html',
  styleUrls: ['./display-jokes.component.scss']
})
export class DisplayJokesComponent implements OnInit {

  jokes;
  cat = "";
  catColors = new Map();

  constructor(
    private route: ActivatedRoute,
    private jokesService: JokesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.cat = params.get('category');
      this.reloadJokes(10);
    });

  }

  reloadJokes(num) {
    this.jokesService.getJokes(this.cat, num)
      .subscribe(jokes => this.jokes = jokes.value);
  }

  categoryColor(categories) {
    if (categories.length === 0) return {};
    if (!this.catColors.has(categories[0])) {
      let color = this.brightColor();
      this.catColors.set(categories[0], color)
    }
    return { "color": this.catColors.get(categories[0]) };
  }

  brightColor() {
    return "hsl(" + 360 * Math.random() + ',' +
      '100%,' +
      (65 + 10 * Math.random()) + '%)';
  }

}
