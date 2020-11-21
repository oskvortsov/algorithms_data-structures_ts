import {
  notSortedArray,
  equalArray,
  sortedArray,
  SortTest,
} from '../../SortTest';
import { CombSort } from '../index';

const TIME_NOT_SORTED_ARRAY = 48;
const TIME_SORTED_ARRAY = 48;
const TIME_EQUAL_ARRAY = 37;

describe('CombSort', () => {
  it('Should test array', () => {
    SortTest.testSort(CombSort);
  });

  it('Test sort class with custom compare', () => {
    SortTest.testSortWithCustomerComparator(CombSort);
  });

  it('Test stability', () => {
    SortTest.testStability(CombSort, true);
  });

  it('Test time complexity', () => {
    SortTest.testTimeComplexity(
      CombSort,
      notSortedArray,
      TIME_NOT_SORTED_ARRAY,
    );
    SortTest.testTimeComplexity(CombSort, sortedArray, TIME_SORTED_ARRAY);
    SortTest.testTimeComplexity(CombSort, equalArray, TIME_EQUAL_ARRAY);
  });
});
