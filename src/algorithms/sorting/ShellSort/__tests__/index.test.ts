import {
  notSortedArray,
  equalArray,
  sortedArray,
  SortTest,
} from '../../SortTest';
import { ShellSort } from '../index';

const TIME_NOT_SORTED_ARRAY = 39;
const TIME_SORTED_ARRAY = 33;
const TIME_EQUAL_ARRAY = 29;

describe('ShellSort', () => {
  it('Should test array', () => {
    SortTest.testSort(ShellSort);
  });

  it('Test sort class with custom compare', () => {
    SortTest.testSortWithCustomerComparator(ShellSort);
  });

  it('Test stability', () => {
    SortTest.testStability(ShellSort);
  });

  it('Test time complexity', () => {
    SortTest.testTimeComplexity(
      ShellSort,
      notSortedArray,
      TIME_NOT_SORTED_ARRAY,
    );
    SortTest.testTimeComplexity(ShellSort, sortedArray, TIME_SORTED_ARRAY);
    SortTest.testTimeComplexity(ShellSort, equalArray, TIME_EQUAL_ARRAY);
  });
});
