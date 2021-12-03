import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ShowRegistersComponent } from './show-registers/show-registers.component';

const routes: Routes = [{path:'inicio',component:InicioComponent},{path:'',component:InicioComponent},{path:'registro-usuario',component:RegisterUserComponent},
{path:'ver-usuarios',component:ShowRegistersComponent}];

/*

    const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'',component:InicioComponent},
  {path:'/registro-usuario',component:RegisterUserComponent},
  {path:'/ver-usuarios',component:ShowRegistersComponent}
]
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
