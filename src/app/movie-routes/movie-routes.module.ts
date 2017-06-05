import { NgModule } from '@angular/core';

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from '.././movie-list/movie-list.component';
import { MovieDetailComponent } from '.././movie-detail/movie-detail.component';
import { MovieCreateComponent } from '.././movie-create/movie-create.component';

export const routes : Routes = [
    { path : '', component : MovieListComponent },
    { path : 'detail', component : MovieDetailComponent },
    { path : 'create', component : MovieCreateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class MovieRoutesModule { }
