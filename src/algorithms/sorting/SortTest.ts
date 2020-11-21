import { Sort } from './Sort';

export const sortedArray = [1, 2, 2, 4, 6, 7, 10, 12, 17, 20, 40];
export const reverseSortedArray = [40, 20, 17, 12, 10, 7, 6, 4, 2, 2, 1];
export const notSortedArray = [40, 2, 6, 4, 10, 2, 12, 1, 17, 20, 7];
export const negativeArray = [12, -1, -12, 20, 32, 0, 2, -12, 100, -100];
export const negativeSortedArray = [-100, -12, -12, -1, 0, 2, 12, 20, 32, 100];
export const equalArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

type SortType = typeof Sort;
interface SortClass extends SortType {}

export class SortTest {
  static testSort(SorterClass: SortClass): void {
    const sorter = new SorterClass();

    expect(sorter.sort([])).toEqual([]);
    expect(sorter.sort([1])).toEqual([1]);
    expect(sorter.sort([1, 2])).toEqual([1, 2]);
    expect(sorter.sort([2, 1, 0, 1, 2])).toEqual([0, 1, 1, 2, 2]);
    expect(sorter.sort(notSortedArray)).toEqual(sortedArray);
    expect(sorter.reverseSort(notSortedArray)).toEqual(reverseSortedArray);
    expect(sorter.sort(negativeArray)).toEqual(negativeSortedArray);
    expect(sorter.sort(equalArray)).toEqual(equalArray);
  }

  static testSortWithCustomerComparator(SorterClass: SortClass): void {
    const options = {
      compareFn: (first, second) => {
        if (first.length === second.length) return 0;
        return first.length < second.length ? -1 : 1;
      },
    };
    const sorter = new SorterClass(options);

    const sortedArr = ['b', 'a', 'cc', 'aaa'];
    expect(sorter.sort(['b', 'a', 'aaa', 'cc'])).toEqual(sortedArr);
  }

  static testStability(SorterClass: SortClass, not?: true): void {
    const options = {
      compareFn: (first, second) => {
        if (first.lastName === second.lastName) return 0;
        return first.lastName < second.lastName ? -1 : 1;
      },
    };
    const sorter = new SorterClass(options);

    const input = [
      {
        lastName: 'Arutyn',
        name: 'Kostya',
      },
      {
        lastName: 'Ivanov',
        name: 'Sergey',
      },
      {
        lastName: 'Ivanov',
        name: 'Ivan',
      },
      {
        lastName: 'Abramov',
        name: 'Denis',
      },
    ];

    const sorted = [
      {
        lastName: 'Abramov',
        name: 'Denis',
      },
      {
        lastName: 'Arutyn',
        name: 'Kostya',
      },
      {
        lastName: 'Ivanov',
        name: 'Sergey',
      },
      {
        lastName: 'Ivanov',
        name: 'Ivan',
      },
    ];

    if (not) {
      expect(sorter.sort(input)).not.toEqual(sorted);
      return;
    }

    expect(sorter.sort(input)).toEqual(sorted);
  }

  static testTimeComplexity<T>(
    SorterClass: SortClass,
    array: Array<T>,
    expectTime: number,
  ): void {
    const callback = jest.fn();
    const options = {
      callback,
    };
    const sorter = new SorterClass(options);

    sorter.sort(array);
    expect(callback).toHaveBeenCalledTimes(expectTime);
  }
}
