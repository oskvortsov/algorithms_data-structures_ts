import { Sort } from '../Sort';

export class BubbleSort extends Sort {
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
    let swapped = true;
    let size = array.length;

    while (swapped) {
      swapped = false;
      this.callback();

      for (let i = 1; i < size; i++) {
        this.callback(array[i]);

        if (comparator.greatThan(array[i - 1], array[i])) {
          [array[i], array[i - 1]] = [array[i - 1], array[i]];
          swapped = true;
        }
      }

      size--;
    }

    return array;
  }
}
