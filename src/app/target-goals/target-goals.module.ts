import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TargetGoalsPageRoutingModule } from './target-goals-routing.module';

import { TargetGoalsPage } from './target-goals.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TargetGoalsPageRoutingModule,
  ],
  declarations: [TargetGoalsPage]
})
export class TargetGoalsPageModule {}
