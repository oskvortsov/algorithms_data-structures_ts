import {
  notSortedArray,
  equalArray,
  sortedArray,
  SortTest,
} from '../../SortTest';
import { SelectionSort } from '../index';

const TIME_NOT_SORTED_ARRAY = 65;
const TIME_SORTED_ARRAY = 65;
const TIME_EQUAL_ARRAY = 54;

describe('SelectionSort', () => {
  it('Should test array', () => {
    SortTest.testSort(SelectionSort);
  });

  it('Test sort class with custom compare', () => {
    SortTest.testSortWithCustomerComparator(SelectionSort);
  });

  it('Should not stability', () => {
    SortTest.testStability(SelectionSort, true);
  });

  it('Test time complexity', () => {
    SortTest.testTimeComplexity(
      SelectionSort,
      notSortedArray,
      TIME_NOT_SORTED_ARRAY,
    );
    SortTest.testTimeComplexity(SelectionSort, sortedArray, TIME_SORTED_ARRAY);
    SortTest.testTimeComplexity(SelectionSort, equalArray, TIME_EQUAL_ARRAY);
  });
});
