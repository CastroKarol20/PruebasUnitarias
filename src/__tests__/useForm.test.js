import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { useForm } from '../hooks/useForm';

describe('useForm hook', () => {
  const initialForm = { name: 'test', email: 'test@example.com' };

  test('debe inicializar el estado del formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current.name).toBe('test');
    expect(result.current.email).toBe('test@example.com');
  });

  test('Debe actualizar el estado del formulario al cambiar la entrada', () => {
    const { result } = renderHook(() => useForm(initialForm));

    act(() => {
      result.current.onInputChange({ target: { name: 'name', value: 'changed' } });
    });

    expect(result.current.name).toBe('changed');
  });

  test('debería restablecer el estado del formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));

    act(() => {
      result.current.onInputChange({ target: { name: 'name', value: 'changed' } });
    });

    act(() => {
      result.current.onResetForm();
    });

    expect(result.current.name).toBe('test');
  });
});
