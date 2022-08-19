import { Component, OnInit } from '@angular/core';
import { Tarea } from './interface-tarea';



@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent implements OnInit {

  tareas: Tarea[] = [
    {
      nombre: "Leer documentacion Angular",
      estado: false,
     
    },
    {
      nombre: "Entregable 1",
      estado: false,
      
    },
    {
      nombre: "Componentes",
      estado: true,
      
    },
    {
      nombre: "Modulos",
      estado: false,
      
    },
    {
      nombre: "Atomic desing",
      estado: false,
      
    },
    {
      nombre: "Comunicar componentes",
      estado: true,
      
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
