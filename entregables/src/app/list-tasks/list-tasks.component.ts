import { Component, OnInit } from '@angular/core';
import { Task } from './Task';



@Component({
  selector: 'app-lista-tareas',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {
  lastId= 0;
  user = "Nico";
  arrayTask: Task[] = []

  
  constructor() { }

  ngOnInit(): void {
  }


  addTask(task: string){
   

    let newTarea: Task =  {
      name: task,
      status: false,
      id: this.lastId +1
     
    };
    this.arrayTask.unshift(newTarea);
    this.lastId++;

  }

  deleteTask(id: number){

    let indexOfObject = this.arrayTask.findIndex((task) => {
      return task.id === id;
    });
    if (indexOfObject !== -1) {
      this.arrayTask.splice(indexOfObject, 1);
    
    }
    
  }
}
