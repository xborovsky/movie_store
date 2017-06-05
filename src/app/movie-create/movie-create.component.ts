import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { MovieStorageService } from '.././movie-storage.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent {

  constructor(private service : MovieStorageService, private router : Router) { }

  createMovie(name : string, year : number, pcs : number): void {
      this.service.addMovie(name, year, pcs);
      this.router.navigate(['']);
  }

  onSubmit(form:any): void {
      this.createMovie(form.value.name, form.value.year, form.value.pcs);
      form.reset();
  }

}
