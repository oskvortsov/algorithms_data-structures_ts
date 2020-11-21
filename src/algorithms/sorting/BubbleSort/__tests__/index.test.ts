import {
  notSortedArray,
  equalArray,
  sortedArray,
  SortTest,
} from '../../SortTest';
import { BubbleSort } from '../index';

const TIME_NOT_SORTED_ARRAY = 60;
const TIME_SORTED_ARRAY = 11;
const TIME_EQUAL_ARRAY = 10;

describe('BubbleSort', () => {
  it('Should test array', () => {
    SortTest.testSort(BubbleSort);
  });

  it('Test sort class with custom compare', () => {
    SortTest.testSortWithCustomerComparator(BubbleSort);
  });

  it('Test stability', () => {
    SortTest.testStability(BubbleSort);
  });

  it('Test time complexity', () => {
    SortTest.testTimeComplexity(
      BubbleSort,
      notSortedArray,
      TIME_NOT_SORTED_ARRAY,
    );
    SortTest.testTimeComplexity(BubbleSort, sortedArray, TIME_SORTED_ARRAY);
    SortTest.testTimeComplexity(BubbleSort, equalArray, TIME_EQUAL_ARRAY);
  });
});
