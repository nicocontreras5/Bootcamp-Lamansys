import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../list-tasks/Task';

@Component({
  selector: 'app-tarea',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
@Input() task!: Task;



@Output() TaskDelete = new EventEmitter<number>();

  constructor() { }

  copyTask(){
    window.navigator['clipboard'].writeText(this.task.name)
  }

  updateTask(){
  
    this.task.status =  !this.task.status;
    
  }

  shareTask(){
  
    window.navigator.share({
        title: 'Tarea: ' + this.task.name,
        text: this.task.name,
        url: 'https://lista-Tareas/tarea/'+ this.task.id,
      })
    
  }


  deleteTask(){
  
    this.TaskDelete.emit(this.task.id);
    
  }

  ngOnInit(): void {
  }

}

