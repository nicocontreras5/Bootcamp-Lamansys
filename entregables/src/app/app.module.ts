import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskComponent } from './Task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';




@NgModule({
  declarations: [
    AppComponent,
    ListTasksComponent,
    AddTaskComponent,
    TaskComponent,
    HeaderComponent,
    ButtonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
