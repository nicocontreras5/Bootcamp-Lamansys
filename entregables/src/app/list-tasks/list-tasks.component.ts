import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from './Task';



@Component({
  selector: 'app-lista-tareas',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {
  lastId= 0;
  user = "Nico";
  @Input() arrayTask !: Task[];
  @Output() arrayTaskChange = new EventEmitter<Task[]>();

  
  constructor() { }

  ngOnInit(): void {
  }


  deleteTask(id: number){

    let indexOfObject = this.arrayTask.findIndex((task) => {
      return task.id === id;
    });
    if (indexOfObject !== -1) {
      this.arrayTask.splice(indexOfObject, 1);
      this.arrayTaskChange.emit(this.arrayTask);
    }
    
  }
}
