import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import TodosService from './todos.service';
import { Todo } from './interfaces/todos.interface';

@Controller('/todos')
class TodosController {
  constructor(private todosService: TodosService) {}
  @Get()
  getAll() {
    return this.todosService.getAll();
  }

  @Post()
  addTodos(@Body() todo) {
    return this.todosService.addTodos(todo);
  }

  @Post('/:id')
  updateTodos(@Param() params, @Body() data: Partial<Todo>) {
    return this.todosService.updateTodos(+params.id, data);
  }
}

export default TodosController;
