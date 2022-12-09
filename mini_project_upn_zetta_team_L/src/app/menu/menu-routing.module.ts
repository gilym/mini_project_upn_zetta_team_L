import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {
    path :'',
    pathMatch:'full',
    component:MenuComponent
  
  },
  {
    path: '**' ,
    pathMatch:'full',
   redirectTo : ''
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
