import { Sort } from '../Sort';

export class InsertSort extends Sort {
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
        Sort.swap(array, i + 1, i);
        this.callback(array[i]);
        i--;
      }

      array[i + 1] = current;
    }

    return array;
  }
}
