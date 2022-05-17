import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: 'user', loadChildren: () => 
      import('./user/user.module')
      .then( m => m.UserModule) 
  }
];

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(ROUTES)
  ]
})
export class PrivateModule { }
