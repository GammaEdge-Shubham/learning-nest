import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todos.interface';

@Injectable()
class TodosService {
  private todos: Todo[] = [
    { id: 1, userId: 1, title: 'default one', isCompleted: true },
  ];

  getAll() {
    return this.todos;
  }

  addTodos(todo: Todo) {
    this.todos.push(todo);
    return this.todos[this.todos.length - 1];
  }

  updateTodos(id: number, data: Partial<Todo>) {
    // let updatedTodo: string | Todo = 'todo is not available';
    // this.todos.map((value) => {
    //   if (value.id == id) {
    //     if (data.title) value.title = data.title;
    //     if (data.isCompleted || data.isCompleted === false)
    //       value.isCompleted = data.isCompleted;
    //     updatedTodo = value;
    //   }
    // });
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) return 'todo is not available';
    if (data.title !== undefined) todo.title = data.title;
    if (data.isCompleted !== undefined) todo.isCompleted = data.isCompleted;
    return todo;
  }
}

export default TodosService;
