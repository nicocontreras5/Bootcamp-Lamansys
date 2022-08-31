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

  updateTask(){
  
    this.task.status =  !this.task.status;
    
  }


  deleteTask(){
  
    this.TaskDelete.emit(this.task.id);
    
  }

  ngOnInit(): void {
  }

}

