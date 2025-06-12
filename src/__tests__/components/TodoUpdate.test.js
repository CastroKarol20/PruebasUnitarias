import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoUpdate } from '../../components/TodoUpdate';

describe('TodoUpdate component', () => {
  const todo = { id: 1, description: 'Test todo', done: false };
  const mockHandleUpdateTodo = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Llama a handleUpdateTodo con id y descripción actualizada al enviar el formulario', () => {
    render(<TodoUpdate todo={todo} handleUpdateTodo={mockHandleUpdateTodo} />);

    const input = screen.getByPlaceholderText('¿Qué hay que hacer');
    fireEvent.change(input, { target: { value: 'Updated description' } });

    const form = screen.getByTestId('form');
    fireEvent.submit(form);

    expect(mockHandleUpdateTodo).toHaveBeenCalledWith(todo.id, 'Updated description');
  });
});
