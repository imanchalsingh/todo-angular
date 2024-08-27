import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  taskArray: { taskName: string; isCompleted: boolean }[] = [
    { taskName: 'Brush teeth', isCompleted: false },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.taskArray.push({
        taskName: form.value.task,
        isCompleted: false,
      });
      form.reset();
    }
  }

  deleteTask(index: number): void {
    this.taskArray.splice(index, 1);
  }
}
