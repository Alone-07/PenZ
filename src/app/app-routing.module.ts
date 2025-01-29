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
    loadChildren: () => import('./tabs/tab/tab.module').then(e => e.TabModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'list-goals',
    loadChildren: () => import('./list-goals/list-goals.module').then( m => m.ListGoalsPageModule)
  },
  {
    path: 'edit-goals',
    loadChildren: () => import('./edit-goals/edit-goals.module').then( m => m.EditGoalsPageModule)
  },
  {
    path: 'recommendation',
    loadChildren: () => import('./recommendation/recommendation.module').then( m => m.RecommendationPageModule)
  },

  {  
    path: 'add-goals',
    loadChildren: () => import('./add-goals/add-goals.module').then( m => m.AddGoalsPageModule)
  },
  {
    path: 'target-goals',
    loadChildren: () => import('./target-goals/target-goals.module').then( m => m.TargetGoalsPageModule)
  },
  {
    path: 'medical-records',
    loadChildren: () => import('./medical-records/medical-records.module').then( m => m.MedicalRecordsPageModule)
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