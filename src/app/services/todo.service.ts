import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {
  private actionUrl = 'https://tt-todos.azurewebsites.net/todos';

  constructor(private readonly httpClient: HttpClient) {
    console.log('TodoService', 'constructor');
  }

  create(todo: Todo) {
    console.log('TodoService', 'create', todo);
    return this.httpClient.post<Todo>(this.actionUrl, todo);
  }

  get(todoId: number) {
    console.log('TodoService', 'get', todoId);
    return this.httpClient.get<Todo>(`${this.actionUrl}${todoId}`);
  }

  getAll(): Observable<Todo[]> {
    console.log('TodoService', 'getAll');
    return this.httpClient.get<Todo[]>(this.actionUrl);
  }

  update(todo: Todo) {
    console.log('TodoService', 'update', todo);
    return this.httpClient.put(`${this.actionUrl}${todo.id}`, todo);
  }

  delete(todoId: number) {
    console.log('TodoService', 'delete', todoId);
    return this.httpClient.delete(`${this.actionUrl}${todoId}`);
  }
}
