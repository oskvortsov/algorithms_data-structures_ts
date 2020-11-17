import { Sort } from '../Sort';

export class ShakerSort extends Sort {
  protected sortMethod<T>(
    originalArray: Array<T>,
    comparator = this.comparator,
  ): Array<T> {
    const array = [...originalArray];
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
      this.callback();

      for (let i = left; i < right; i++) {
        this.callback(array[i]);

        if (comparator.greatThan(array[i], array[i + 1])) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
        }
      }
      right--;

      for (let i = right; i > left; i--) {
        if (comparator.lessThan(array[i], array[i - 1])) {
          [array[i], array[i - 1]] = [array[i - 1], array[i]];
        }
      }
      left++;
    }

    return array;
  }
}
