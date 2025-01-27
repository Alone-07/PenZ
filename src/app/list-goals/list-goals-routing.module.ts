import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListGoalsPage } from './list-goals.page';

const routes: Routes = [
  {
    path: '',
    component: ListGoalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListGoalsPageRoutingModule {}
