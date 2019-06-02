import { Component, OnInit } from '@angular/core';
import {MoviedbService} from '../../models/moviedb.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dbservice: MoviedbService) { }

  ngOnInit() {
  this.getmovies();
  }
  getmovies() {

  }

}
