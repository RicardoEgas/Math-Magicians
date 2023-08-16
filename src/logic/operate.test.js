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

  test('testing modulo', () => {
    const result = operate(9, 3, '%');
    expect(result).toBe('0');
  });
  test('testing division by zero', () => {
    const result = operate(9, 0, '÷');
    expect(result).toBe("Can't divide by 0.")
  });
  test('testing modulo by zero', () => {
    const result = operate(9, 0, '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.")
  });
  it('For Unknown Operation', () => {
    expect(() => operate(3, 4, '#')).toThrowError("Unknown operation '#'");
  });
});
