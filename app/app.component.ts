import { Component } from '@angular/core';

import { Task } from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent { 
    private tasks = [
        new Task(
            "Buy a monkey",
            false
        ),
        new Task (
            "Return the monkey..",
            false
        )
    ]
    private currentTask = new Task(null, false);

    //add a task to the tasks array
    //using "this" allows us to get the scope of the class rather than just the
    //addTask method's scope
    addTask(){
        let task = new Task(this.currentTask.content, this.currentTask.completed);
        this.tasks.push(task);
    }
 }