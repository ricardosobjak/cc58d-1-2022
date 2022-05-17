import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DefaultComponent } from './private/default/default.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'app', component: DefaultComponent, 
    loadChildren: () => 
      import('./private/private.module')
      .then(m => m.PrivateModule) 
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
