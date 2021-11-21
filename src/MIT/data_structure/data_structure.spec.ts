import { StaticArray } from './StaticArray';

describe('StaticArray', () => {
  const dataArr = new StaticArray<number>(5);

  it('should be create', () => {
    expect(dataArr).not.toBeUndefined();
  });

  it('should get error when use incorrect index', () => {
    try {
      dataArr.getAt(6);
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe('StaticArray: Out of range');
    }
  });

  it('should get error when use incorrect index', () => {
    try {
      dataArr.setAt(6, 1);
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe('StaticArray: Out of range');
    }
  });

  it('should work correctly when use index in range', () => {
    try {
      dataArr.getAt(1);
      dataArr.setAt(1, 1);
      expect(true).toBe(true);
    } catch (error) {
      expect(true).toBe('StaticArray: Out of range');
    }
  });
});
