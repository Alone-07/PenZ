import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(e => e.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(e => e.SignupModule),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./tabs/tab/tab.module').then(e => e.TabModule),
  },
  {
    path: 'tab/goals',
    loadChildren: () => import('./tabs/goals/goals.module').then(e => e.GoalsModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'add-goals',
    loadChildren: () => import('./add-goals/add-goals.module').then( m => m.AddGoalsPageModule)
  }
];
@NgModule({
  imports: [IonicModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule]
})
export class AppRoutingModule {}
