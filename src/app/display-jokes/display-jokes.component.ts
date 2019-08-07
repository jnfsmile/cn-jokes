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

  constructor(
    private route: ActivatedRoute,
    private jokesService: JokesService
  ) { }

  ngOnInit() {
    this.jokes = this.jokesService.getJokes('');
  }

}
