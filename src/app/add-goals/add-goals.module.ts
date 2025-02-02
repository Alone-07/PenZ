import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddGoalsPageRoutingModule } from './add-goals-routing.module';

import { AddGoalsPage } from './add-goals.page';
import { TargetGoalsPageModule } from '../target-goals/target-goals.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddGoalsPageRoutingModule,
    TargetGoalsPageModule
  ],
  declarations: [AddGoalsPage]
})
export class AddGoalsPageModule {}
