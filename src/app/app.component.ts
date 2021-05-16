import {Component, OnInit} from '@angular/core';
import { Task } from './task'
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editMode = false;
  taskName = '';
  items: MenuItem[];

  constructor () {
    this.items = [
      {label: 'Lista zadań', icon: 'pi pi-fw pi-list'},
    ];

    setTimeout(() => {}, 500);
    this.sortTasks();
  }

  tasks: Task[] = [
    {
      name: 'Siłownia',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      done: false,
    },
    {
      name: 'Gotowanie',
      done: true,
    },
  ];


  clearTasks() {
    this.tasks = [];
  }


  createTask() {
    const task: Task = {
      name : this.taskName,
      done: false,
    }
    this.tasks.push(task);
    this.taskName = '';
    this.sortTasks();
  }

  switchEditMode() {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task) {
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks();
  }

  private sortTasks() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1);
  }


}
