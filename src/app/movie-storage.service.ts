import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable()
export class MovieStorageService {

  id : number = 1;
  movies : Movie[] = [
    new Movie(this.id++, 'Movie 1', 1999, 2),
    new Movie(this.id++, 'Movie 2', 2011, 1),
    new Movie(this.id++, 'Movie 3', 2003, 4)
  ];

  constructor() { }

  getAllMovies() : Movie[] {
      return this.movies;
  }

  addMovie(name : string, year : number, pcs : number) : void {
      this.movies.push(new Movie(this.id++, name, year, pcs));
  }

  deleteMovie(id : number) : void {
      for (var i=0; i<this.movies.length; i++) {
          if (this.movies[i].getId() === id) {
              this.movies.splice(i, 1);
              break;
          }
      }
  }

  checkoutMovie(id: number) : void {
      for (var i=0; i<this.movies.length; i++) {
          if (this.movies[i].getId() === id) {
              this.movies[i].setPcs(this.movies[i].getPcs()-1);
              break;
          }
      }
  }

}
