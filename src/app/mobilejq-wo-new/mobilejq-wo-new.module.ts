import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MOBILEJQWONEWPage } from './mobilejq-wo-new.page';

const routes: Routes = [
  {
    path: '',
    component: MOBILEJQWONEWPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MOBILEJQWONEWPage]
})
export class MOBILEJQWONEWPageModule {}
