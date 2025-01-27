import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(e => e.DashboardModule),
      },
      {
        path: 'goals',
        loadChildren: () => import('../goals/goals.module').then(e => e.GoalsModule),
      },
      {
        path: 'categories',
        loadChildren: () => import('../categories/categories.module').then(e => e.CategoriesModule),
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then(e => e.AccountModule),
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabRoutingModule { }
