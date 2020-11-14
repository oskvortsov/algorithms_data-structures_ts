import {
  notSortedArray,
  equalArray,
  sortedArray,
  SortTest,
} from '../../SortTest';
import { InsertSort } from '../index';

const TIME_NOT_SORTED_ARRAY = 34;
const TIME_SORTED_ARRAY = 10;
const TIME_EQUAL_ARRAY = 9;

describe('InsertSort', () => {
  it('Should test array', () => {
    SortTest.testSort(InsertSort);
  });

  it('Test sort class with custom compare', () => {
    SortTest.testSortWithCustomerComparator(InsertSort);
  });

  it('Test stability', () => {
    SortTest.testStability(InsertSort);
  });

  it('Test time complexity', () => {
    SortTest.testTimeComplexity(
      InsertSort,
      notSortedArray,
      TIME_NOT_SORTED_ARRAY,
    );
    SortTest.testTimeComplexity(InsertSort, sortedArray, TIME_SORTED_ARRAY);
    SortTest.testTimeComplexity(InsertSort, equalArray, TIME_EQUAL_ARRAY);
  });
});
