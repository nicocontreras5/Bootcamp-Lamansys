import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListaTareasComponent } from '../lista-tareas/lista-tareas.component';
import { Tarea } from '../lista-tareas/Tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {
@Input() tarea!: Tarea;
@Output() TareaDelete = new EventEmitter<number>();

  constructor() { }

  updateTarea(){
  
    this.tarea.estado =  !this.tarea.estado;
    
  }


  deleteTarea(id: number){
  
    this.TareaDelete.emit(id);
    
  }

  ngOnInit(): void {
  }

}

