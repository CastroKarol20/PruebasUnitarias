import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoAdd } from '../../components/TodoAdd';

describe('TodoAdd component', () => {
  const mockHandleNewTodo = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Llama a handleNewTodo con una nueva tarea y restablece el formulario al enviarlo.', () => {
    render(<TodoAdd handleNewTodo={mockHandleNewTodo} />);

    const input = screen.getByPlaceholderText('¿Qué hay que hacer');
    fireEvent.change(input, { target: { value: 'New todo' } });

    const button = screen.getByRole('button', { name: /agregar/i });
    fireEvent.click(button);

    expect(mockHandleNewTodo).toHaveBeenCalledWith(expect.objectContaining({
      description: 'New todo',
      done: false,
    }));
    expect(input.value).toBe('');
  });

  test('No llama a handleNewTodo si la longitud de la descripción es menor o igual a 1', () => {
    render(<TodoAdd handleNewTodo={mockHandleNewTodo} />);

    const input = screen.getByPlaceholderText('¿Qué hay que hacer');
    fireEvent.change(input, { target: { value: 'a' } });

    const button = screen.getByRole('button', { name: /agregar/i });
    fireEvent.click(button);

    expect(mockHandleNewTodo).not.toHaveBeenCalled();
  });
});
