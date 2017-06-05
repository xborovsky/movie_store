import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';

import { MovieStorageService } from './movie-storage.service';

import { MovieRoutesModule } from './movie-routes/movie-routes.module';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    MovieCreateComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieRoutesModule
  ],
  providers: [MovieStorageService],
  bootstrap: [MovieComponent]
})
export class AppModule { }
