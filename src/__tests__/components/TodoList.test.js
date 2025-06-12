import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoList } from '../../components/TodoList';

describe('TodoList component', () => {
  const todos = [
    { id: 1, description: 'Test todo 1', done: false },
    { id: 2, description: 'Test todo 2', done: true },
  ];

  const mockHandleUpdateTodo = jest.fn();
  const mockHandleDeleteTodo = jest.fn();
  const mockHandleCompleteTodo = jest.fn();

  test('muestra una lista de tareas pendientes', () => {
    render(
      <TodoList
        todos={todos}
        handleUpdateTodo={mockHandleUpdateTodo}
        handleDeleteTodo={mockHandleDeleteTodo}
        handleCompleteTodo={mockHandleCompleteTodo}
      />
    );

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(todos.length);
  });
});
