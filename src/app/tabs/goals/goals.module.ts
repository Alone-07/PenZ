import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';


@NgModule({
  declarations: [GoalsComponent],
  imports: [
    CommonModule,
    GoalsRoutingModule,
    FormsModule,
    IonicModule
  ]
})
export class GoalsModule { }
