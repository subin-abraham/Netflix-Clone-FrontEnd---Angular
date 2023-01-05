import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  trendingMovies: any
  popularMovies: any
  theatresmovies: any

  constructor( private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatresMovies();
    this.getPopularMovies();

  }

  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/Data/trending-movies.json').subscribe((movies) => {
      this.trendingMovies = movies;
      console.log(this.trendingMovies);
    });

  }

  getTheatresMovies() {
    this.http.get('http://localhost:4200/assets/Data/theatre-movies.json').subscribe((movies) => {
      this.theatresmovies = movies;
      console.log(this.theatresmovies);
    });

  }
  getPopularMovies() {
    this.http.get('http://localhost:4200/assets/Data/popular-movies.json').subscribe((movies) => {
      this.popularMovies = movies;
      console.log(this.popularMovies);
    });

  }
  goToMovie(type: string, id: string) {
    this.router.navigate(['movie' , type, id]);
  }


}
