import { render, screen, fireEvent } from '@testing-library/react';
import TransactionForm from './TransactionForm';

const mockAddTransaction = jest.fn();

jest.mock('../context/TransactionContext', () => ({
  useTransactions: () => ({
    addTransaction: mockAddTransaction
  })
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key
  })
}));

describe('TransactionForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renderiza todos los campos', () => {
    render(<TransactionForm />);

    expect(screen.getByLabelText('description')).toBeInTheDocument();
    expect(screen.getByLabelText('amount')).toBeInTheDocument();
    expect(screen.getByLabelText('date')).toBeInTheDocument();
    expect(screen.getByLabelText('type')).toBeInTheDocument();
    expect(screen.getByText('add')).toBeInTheDocument();
    expect(screen.getByText('clear')).toBeInTheDocument();
  });

  test('estado inicial correcto', () => {
    render(<TransactionForm />);

    expect(screen.getByLabelText('description').value).toBe('');
    expect(screen.getByLabelText('amount').value).toBe('');
    expect(screen.getByLabelText('date').value).toBe('');
    expect(screen.getByLabelText('type').value).toBe('gasto');
  });

  test('actualiza inputs al escribir', () => {
    render(<TransactionForm />);

    fireEvent.change(screen.getByLabelText('description'), {
      target: { value: 'Café' }
    });

    fireEvent.change(screen.getByLabelText('amount'), {
      target: { value: '50' }
    });

    expect(screen.getByLabelText('description').value).toBe('Café');
    expect(screen.getByLabelText('amount').value).toBe('50');
  });

  test('cambia el tipo correctamente', () => {
    render(<TransactionForm />);

    fireEvent.change(screen.getByLabelText('type'), {
      target: { value: 'abono' }
    });

    expect(screen.getByLabelText('type').value).toBe('abono');
  });

  test('envía el formulario y llama addTransaction con datos correctos', () => {
    render(<TransactionForm />);

    fireEvent.change(screen.getByLabelText('description'), {
      target: { value: 'Pago internet' }
    });

    fireEvent.change(screen.getByLabelText('amount'), {
      target: { value: '300' }
    });

    fireEvent.change(screen.getByLabelText('date'), {
      target: { value: '2025-01-01' }
    });

    fireEvent.submit(screen.getByRole('button', { name: 'add' }));

    expect(mockAddTransaction).toHaveBeenCalledTimes(1);
    expect(mockAddTransaction).toHaveBeenCalledWith({
      description: 'Pago internet',
      amount: 300,
      date: '2025-01-01',
      type: 'gasto'
    });
  });

  test('limpia el formulario después de submit', () => {
    render(<TransactionForm />);

    fireEvent.change(screen.getByLabelText('description'), {
      target: { value: 'Algo' }
    });

    fireEvent.submit(screen.getByRole('button', { name: 'add' }));

    expect(screen.getByLabelText('description').value).toBe('');
    expect(screen.getByLabelText('amount').value).toBe('');
    expect(screen.getByLabelText('date').value).toBe('');
    expect(screen.getByLabelText('type').value).toBe('gasto');
  });

  test('botón clear limpia el formulario', () => {
    render(<TransactionForm />);

    fireEvent.change(screen.getByLabelText('description'), {
      target: { value: 'Test' }
    });

    fireEvent.click(screen.getByText('clear'));

    expect(screen.getByLabelText('description').value).toBe('');
  });
});