import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '../../components/TodoItem';

describe('TodoItem component', () => {
  const todo = { id: 1, description: 'Test todo', done: false };
  const mockHandleUpdateTodo = jest.fn();
  const mockHandleDeleteTodo = jest.fn();
  const mockHandleCompleteTodo = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('llama a handleCompleteTodo cuando se hace clic en span', () => {
    render(
      <TodoItem
        todo={todo}
        handleUpdateTodo={mockHandleUpdateTodo}
        handleDeleteTodo={mockHandleDeleteTodo}
        handleCompleteTodo={mockHandleCompleteTodo}
      />
    );

    const spanElement = screen.getByText('', { selector: 'span' });
    fireEvent.click(spanElement);
    expect(mockHandleCompleteTodo).toHaveBeenCalledWith(todo.id);
  });

  test('llama a handleDeleteTodo cuando se hace clic en el botón eliminar', () => {
    render(
      <TodoItem
        todo={todo}
        handleUpdateTodo={mockHandleUpdateTodo}
        handleDeleteTodo={mockHandleDeleteTodo}
        handleCompleteTodo={mockHandleCompleteTodo}
      />
    );

    const buttons = screen.getAllByRole('button');
    const deleteButton = buttons.find(button => button.classList.contains('btn-delete'));
    fireEvent.click(deleteButton);
    expect(mockHandleDeleteTodo).toHaveBeenCalledWith(todo.id);
  });
});
