import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../lista-tareas/interface-tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {
@Input() tarea: Tarea ={
  nombre : "",
    estado: false
};

 
  constructor() { }

  ngOnInit(): void {
  }

}
