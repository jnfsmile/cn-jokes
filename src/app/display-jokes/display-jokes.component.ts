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
  qty = 10;
  cat = "";

  constructor(
    private route: ActivatedRoute,
    private jokesService: JokesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.cat = params.get('category');
      this.jokes = this.jokesService.getJokes(this.cat, this.qty);
    });

  }

  reloadJokes(obj) {
    console.log(obj);
    this.jokes = this.jokesService.getJokes(this.cat, this.qty);
  }

}
