import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-tarea',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() newTask = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

addTask(task: HTMLInputElement ){
  if (task.value != "") {
    this.newTask.emit(task.value);
    task.value= "";
  }

 }


}
