import { Component, Input } from '@angular/core';

import { Task } from '../model/Task';

@Component({
    moduleId: module.id,
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css']
})

export class CardComponent { 
    @Input() task: Task;
 }