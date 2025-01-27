import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TargetGoalsPage } from './target-goals.page';

const routes: Routes = [
  {
    path: '',
    component: TargetGoalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TargetGoalsPageRoutingModule {}
