import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {MoviesComponent} from './views/results/movies/movies.component';

const routes: Routes = [
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'results', component: MoviesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
