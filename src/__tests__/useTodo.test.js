import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { useTodo } from '../hooks/useTodo';

describe('useTodo hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should initialize with empty todos or from localStorage', () => {
    const { result } = renderHook(() => useTodo());
    expect(result.current.todos).toEqual([]);
    expect(result.current.todosCount).toBe(0);
    expect(result.current.pendingTodosCount).toBe(0);
  });

  test('should add a new todo', () => {
    const { result } = renderHook(() => useTodo());
    const newTodo = { id: 1, description: 'Test todo', done: false };

    act(() => {
      result.current.handleNewTodo(newTodo);
    });

    expect(result.current.todos).toContainEqual(newTodo);
    expect(result.current.todosCount).toBe(1);
    expect(result.current.pendingTodosCount).toBe(1);
  });

  test('should delete a todo', () => {
    const { result } = renderHook(() => useTodo());
    const newTodo = { id: 1, description: 'Test todo', done: false };

    act(() => {
      result.current.handleNewTodo(newTodo);
    });

    act(() => {
      result.current.handleDeleteTodo(1);
    });

    expect(result.current.todos).toHaveLength(0);
  });

  test('should toggle complete status of a todo', () => {
    const { result } = renderHook(() => useTodo());
    const newTodo = { id: 1, description: 'Test todo', done: false };

    act(() => {
      result.current.handleNewTodo(newTodo);
    });

    act(() => {
      result.current.handleCompleteTodo(1);
    });

    expect(result.current.todos[0].done).toBe(true);
  });

  test('should update todo description', () => {
    const { result } = renderHook(() => useTodo());
    const newTodo = { id: 1, description: 'Test todo', done: false };

    act(() => {
      result.current.handleNewTodo(newTodo);
    });

    act(() => {
      result.current.handleUpdateTodo(1, 'Updated description');
    });

    expect(result.current.todos[0].description).toBe('Updated description');
  });
});
