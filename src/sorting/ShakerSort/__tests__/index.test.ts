import {
  notSortedArray,
  equalArray,
  sortedArray,
  SortTest,
} from '../../SortTest';
import { ShakerSort } from '../index';

const TIME_NOT_SORTED_ARRAY = 35;
const TIME_SORTED_ARRAY = 35;
const TIME_EQUAL_ARRAY = 30;

describe('ShakerSort', () => {
  it('Should test array', () => {
    SortTest.testSort(ShakerSort);
  });

  it('Test sort class with custom compare', () => {
    SortTest.testSortWithCustomerComparator(ShakerSort);
  });

  it('Test stability', () => {
    SortTest.testStability(ShakerSort);
  });

  it('Test time complexity', () => {
    SortTest.testTimeComplexity(
      ShakerSort,
      notSortedArray,
      TIME_NOT_SORTED_ARRAY,
    );
    SortTest.testTimeComplexity(ShakerSort, sortedArray, TIME_SORTED_ARRAY);
    SortTest.testTimeComplexity(ShakerSort, equalArray, TIME_EQUAL_ARRAY);
  });
});
