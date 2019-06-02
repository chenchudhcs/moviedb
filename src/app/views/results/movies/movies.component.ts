import { Component, OnInit } from '@angular/core';
import {MoviedbService} from '../../../models/moviedb.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  query: string;
  title: string;
  // movies: Movies[];
  id: number;
  constructor(private moviedb: MoviedbService, private activatedRoute: ActivatedRoute) {
    this.query = this.activatedRoute.snapshot.paramMap.get('query');
  }

  ngOnInit() {
    this.showMovies();
  }

  // This will search the database and return the first twenty movies with the search word and save them all in the movies array
  showMovies() {
    this.query = this.activatedRoute.snapshot.paramMap.get('query');
    this.moviedb.movieSearch(this.query).subscribe( res => {
    });
  }
}
