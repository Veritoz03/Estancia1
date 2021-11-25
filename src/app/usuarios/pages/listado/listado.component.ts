import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {
 

  
  constructor(private usuariosService:UsuariosService) { }
  
  ngOnInit(): void {

  }
  
}
