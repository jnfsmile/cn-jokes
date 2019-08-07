import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayJokesComponent } from './display-jokes/display-jokes.component';

const routes: Routes = [
  { path: '', component: DisplayJokesComponent },
  { path: ':category', component: DisplayJokesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
