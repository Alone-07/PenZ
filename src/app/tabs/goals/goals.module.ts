import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';
import { ListGoalsPageModule } from 'src/app/list-goals/list-goals.module';

@NgModule({
  declarations: [GoalsComponent],
  imports: [
    CommonModule,
    GoalsRoutingModule,
    FormsModule,
    IonicModule,
    ListGoalsPageModule
  ]
})
export class GoalsModule { 
 
}
