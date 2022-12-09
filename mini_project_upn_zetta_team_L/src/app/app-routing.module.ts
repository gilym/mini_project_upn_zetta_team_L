import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path : 'login',
    loadChildren:()=>import('./login/login.module').then(m=> m.LoginModule),
  },

    {
    path: "",
    redirectTo: "/home",
    pathMatch: 'full'
  }
  ,
  {
    path : 'home',
    loadChildren:()=>import('./home/home.module').then(m=> m.HomeModule),
  },
  {
    path : 'menu',
    loadChildren:()=>import('./menu/menu.module').then(m=> m.MenuModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
