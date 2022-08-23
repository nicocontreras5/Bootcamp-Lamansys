import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-tarea',
  templateUrl: './add-tarea.component.html',
  styleUrls: ['./add-tarea.component.scss']
})
export class AddTareaComponent implements OnInit {
  @Output() newTarea = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

addTarea(tarea: HTMLInputElement ){
  if (tarea.value != "") {
    this.newTarea.emit(tarea.value);
    tarea.value= "";
  }

 }


}
