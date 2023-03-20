import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: any;

  @Output() done = new EventEmitter<any>();

  colorToBind = 'blue';

  constructor() {
    console.log('TodoComponent', 'constructor');
  }

  //
  // Lifecycle Hook...
  // Werden von Angular
  //
  // Gibt auch noch: ngOnChanges
  ngOnInit() {
    console.log('TodoComponent', 'Lifecycle Hook', 'ngOnInit()');
  }
  // Gibt auch noch: ngAfterContentInit()
  // Gibt auch noch: ngAfterContentChecked()
  ngAfterViewInit() {
    console.log('TodoComponent', 'Lifecycle Hook', 'ngAfterViewInit()');
  }
  ngAfterViewChecked() {
    console.log('TodoComponent', 'Lifecycle Hook', 'ngAfterViewChecked()');
  }
  ngOnDestroy() {
    console.log('TodoComponent', 'Lifecycle Hook', 'ngOnDestroy()');
  }

  //
  // Individuelles...
  //
  markTodoAsDone(todo: Todo) {
    todo.done = !todo.done;
    this.done.emit(todo);
  }
}
