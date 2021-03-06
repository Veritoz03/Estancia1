import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {  FlexLayoutModule  }  from  '@angular/flex-layout' ;

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';





@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    UsuarioComponent,
    HomeComponent,
    ListadoComponent,
    CategoriasComponent,
    PublicacionesComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
