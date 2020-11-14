import { SortTest } from '../../SortTest';
import { InsertSort } from '../index';

describe('InsertSort', () => {
  it('Should test array', () => {
    SortTest.testSort(InsertSort);
  });

  it('Test sort class with custom compare', () => {
    SortTest.testSortWithCustomerComparator(InsertSort);
  });
});
