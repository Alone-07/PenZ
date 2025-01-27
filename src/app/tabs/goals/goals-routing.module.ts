import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsComponent } from './goals.component';

const routes: Routes = [
  {
      path: '',
      component: GoalsComponent,
  },
  {  
    path: 'add-goals',
    loadChildren: () => import('../../add-goals/add-goals.module').then( m => m.AddGoalsPageModule)
  },
  {
    path: 'target-goals',
    loadChildren: () => import('../../target-goals/target-goals.module').then( m => m.TargetGoalsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }
