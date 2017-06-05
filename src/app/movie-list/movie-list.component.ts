import { Component } from '@angular/core';

import { Movie } from '.././movie';

import { MovieStorageService } from '.././movie-storage.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  constructor(private service : MovieStorageService) {
  }
  
  deleteMovie(id : number) : void {
      if (confirm('Do you really want to delete selected movie?')) {
          this.service.deleteMovie(id);
      }
  }

  getAllMovies() : Movie[] {
      return this.service.getAllMovies();
  }

  checkoutMovie(movie : Movie) : void {
      if (movie.getPcs() === 0) {
          return;
      }
      this.service.checkoutMovie(movie.getId());
  }

}
