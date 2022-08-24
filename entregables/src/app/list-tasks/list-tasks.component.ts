import { Component, OnInit } from '@angular/core';
import { Task } from './Task';



@Component({
  selector: 'app-lista-tareas',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {
  lastId= 2;
  user = "Nico";
  arrayTask: Task[] = [
    {
      name: "Leer documentacion Angular",
      status: false,
      id: 1,

    },
    {
      name: "Entregable 1",
      status: false,
      id: 2,

    }
  ]

  
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
