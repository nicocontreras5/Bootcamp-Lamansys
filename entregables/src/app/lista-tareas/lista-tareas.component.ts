import { Component, OnInit } from '@angular/core';
import { Tarea } from './Tarea';



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
      id: 1,

    },
    {
      nombre: "Entregable 1",
      estado: false,
      id: 2,

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addTarea(nameTarea: string){
    let newTarea: Tarea =  {
      nombre: nameTarea,
      estado: false,
      id: this.tareas.length+1
     
    };

    this.tareas.unshift(newTarea);
  }

  deleteTarea(id: number){

    let indexOfObject = this.tareas.findIndex((tarea) => {
      return tarea.id === id;
    });
    if (indexOfObject !== -1) {
      this.tareas.splice(indexOfObject, 1);
    }
   
  }
}
