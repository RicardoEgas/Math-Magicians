import operate from './operate';

describe('test operations', () => {
  test('testing addition', () => {
    const result = operate(1, 1, '+');
    expect(result).toBe('2');
  });

  test('testing subtraction', () => {
    const result = operate(1, 1, '-');
    expect(result).toBe('0');
  });

  test('testing multiplier', () => {
    const result = operate(3, 3, 'x');
    expect(result).toBe('9');
  });

  test('testing division', () => {
    const result = operate(9, 3, '÷');
    expect(result).toBe('3');
  });

  test('testing module', () => {
    const result = operate(9, 3, '%');
    expect(result).toBe('0');
  });
});
