import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';

const routes: Routes =[
  {
    path:'',
    component: HomeComponent,
    children: [
      { path: 'listado', component: ListadoComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'editar/:id', component: AgregarComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: 'categorias', component: CategoriasComponent},
      { path: 'publicaciones', component: PublicacionesComponent},
      { path: ':id', component: UsuarioComponent },
      { path: '**', redirectTo: 'listado'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( routes)
  ],
  exports:[
    RouterModule
  ]
})
export class UsuariosRoutingModule { }
