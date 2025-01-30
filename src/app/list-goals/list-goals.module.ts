import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListGoalsPageRoutingModule } from './list-goals-routing.module';

import { ListGoalsPage } from './list-goals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListGoalsPageRoutingModule
  ],
  declarations: [ListGoalsPage],
  exports: [ListGoalsPage],
})
export class ListGoalsPageModule {}
