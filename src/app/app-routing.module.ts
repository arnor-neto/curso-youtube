import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstTagComponent } from './components/first-tag/first-tag.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';

const routes: Routes = [
  { path: '', component: FirstTagComponent },
  { path: 'animals', component: ListRenderComponent },
  { path: 'exercises', component: ExercisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
