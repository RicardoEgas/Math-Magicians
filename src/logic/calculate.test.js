import calculate from './calculate';

describe('calculate data', () => {
  test('test if AC is pressed', () => {
    const result = calculate({ total: 2, next: 5, operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  test('test if another number is added', () => {
    const result = calculate({ total: 2, next: 5, operation: '+' }, '0');
    expect(result).toEqual({ total: 2, next: '50', operation: '+' });
  });

  test('test if another number is added', () => {
    const result = calculate({ total: 2, next: 5, operation: '+' }, '0');
    expect(result).toEqual({ total: 2, next: '50', operation: '+' });
  });

  test('test if there is no operation', () => {
    const result = calculate({ total: '2', next: '5', operation: '+' }, '.');
    expect(result).toEqual({ total: '2', next: '5.', operation: '+' });
  });

  test('test equal sign', () => {
    const result = calculate({ total: '2', next: '5', operation: '+' }, '=');
    expect(result).toEqual({ total: '7', next: null, operation: null });
  });
});
