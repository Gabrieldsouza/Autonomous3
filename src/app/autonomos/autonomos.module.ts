import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AutonomosPage } from './autonomos.page';

const routes: Routes = [
  {
    path: '',
    component: AutonomosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: AutonomosPage }])
  ],
  declarations: [AutonomosPage]
})
export class AutonomosPageModule {}
