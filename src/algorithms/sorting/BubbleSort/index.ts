import { Sort } from '../Sort';

export class BubbleSort extends Sort {
  protected sortMethod<T>(
    originalArray: Array<T>,
    comparator = this.comparator,
  ): Array<T> {
    const array = [...originalArray];
    let swapped = true;
    let size = array.length;

    while (swapped) {
      swapped = false;
      this.callback();

      for (let i = 1; i < size; i++) {
        this.callback(array[i]);

        if (comparator.greatThan(array[i - 1], array[i])) {
          Sort.swap(array, i, i - 1);
          swapped = true;
        }
      }

      size--;
    }

    return array;
  }
}
