import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task; // recibe datos desde otro componente

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit() {
  }

  deleteTask(task: Task){
    if(confirm('Are you sure do you want to delete?')){
      this.taskService.deleteTask(task);
    }
  }

}

