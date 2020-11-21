import { Sort } from '../Sort';

export class SelectionSort extends Sort {
  protected sortMethod<T>(
    originalArray: Array<T>,
    comparator = this.comparator,
  ): Array<T> {
    const array = [...originalArray];

    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      this.callback(array[i]);

      for (let j = i + 1; j < array.length; j++) {
        this.callback(array[j]);

        if (comparator.lessThan(array[j], array[minIndex])) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        Sort.swap(array, i, minIndex);
      }
    }

    return array;
  }
}
