import { Component } from '@angular/core';
import { Task } from './list-tasks/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'entregables';
  theme: string ="light_mode";
  user = "Nico";
  arrayTask: Task[] = [
    {
      name: "task 1",
      id: 0,
      status: true
    },
    {
      name: "task 2",
      id: 1,
      status: true
    }, {
      name: "task 3",
      id: 2,
      status: false
    },
    {
      name: "task 4",
      id: 3,
      status: false
    }

  ];
  lastId = this.arrayTask.length;

  constructor() { }

  ngOnInit(): void {
  }


  addTask(task: string) {


    let newTarea: Task = {
      name: task,
      status: false,
      id: this.lastId + 1

    };
    this.arrayTask.unshift(newTarea);
    this.lastId++;

  }


  toggleTheme(){
    
    this.theme = this.theme === "light_mode" ? "dark_mode" : "light_mode";

  }



}
