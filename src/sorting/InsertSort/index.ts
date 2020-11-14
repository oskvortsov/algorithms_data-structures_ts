import { Sort } from '../Sort';

export class InsertSort extends Sort {
  sort<T>(originalArray: Array<T>): Array<T> {
    return this.sortMethod(originalArray);
  }

  reverseSort<T>(arr: Array<T>): Array<T> {
    const revereComparator = this.comparator.reverse();
    return this.sortMethod(arr, revereComparator);
  }

  protected sortMethod<T>(
    originalArray: Array<T>,
    comparator = this.comparator,
  ): Array<T> {
    const array = [...originalArray];

    for (let j = 1; j < array.length; j++) {
      const current = array[j];
      let i = j - 1;

      this.callback(current);

      while (i > -1 && comparator.lessThan(current, array[i])) {
        [array[i + 1], array[i]] = [array[i], array[i + 1]];
        this.callback(array[i]);
        i--;
      }

      array[i + 1] = current;
    }

    return array;
  }
}
