import { todoReducer } from '../todoReducer';

describe('todoReducer', () => {
  const initialState = [
    { id: 1, description: 'Test todo 1', done: false },
    { id: 2, description: 'Test todo 2', done: true },
  ];

  test('agrega una nueva tarea pendiente', () => {
    const newTodo = { id: 3, description: 'New todo', done: false };
    const action = { type: 'Add Todo', payload: newTodo };
    const state = todoReducer(initialState, action);
    expect(state).toHaveLength(3);
    expect(state).toContainEqual(newTodo);
  });

  test('actualiza una tarea', () => {
    const updatedTodo = { id: 3, description: 'Updated todo', done: false };
    const action = { type: 'Actualizar Todo', payload: updatedTodo };
    const state = todoReducer(initialState, action);
    expect(state).toHaveLength(initialState.length + 1);
    expect(state).toContainEqual(updatedTodo);
  });

  test('elimina una tarea', () => {
    const action = { type: 'Delete Todo', payload: 1 };
    const state = todoReducer(initialState, action);
    expect(state).toHaveLength(initialState.length - 1);
    expect(state.find(todo => todo.id === 1)).toBeUndefined();
  });

  test('alterna el estado completo de una tarea pendiente.', () => {
    const action = { type: 'Complete Todo', payload: 1 };
    const state = todoReducer(initialState, action);
    const toggledTodo = state.find(todo => todo.id === 1);
    expect(toggledTodo.done).toBe(true);
  });

  test('actualiza toda la descripción', () => {
    const action = { type: 'Update Todo', payload: { id: 1, description: 'Updated description' } };
    const state = todoReducer(initialState, action);
    const updatedTodo = state.find(todo => todo.id === 1);
    expect(updatedTodo.description).toBe('Updated description');
  });

  test('devuelve el estado inicial para una acción desconocida.', () => {
    const action = { type: 'Unknown Action' };
    const state = todoReducer(initialState, action);
    expect(state).toEqual(initialState);
  });
});
