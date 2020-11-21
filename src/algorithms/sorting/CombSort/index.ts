import { Sort } from '../Sort';

const SHRINK_FACTOR = 1.3;

export class CombSort extends Sort {
  protected sortMethod<T>(
    originalArray: Array<T>,
    comparator = this.comparator,
  ): Array<T> {
    const array = [...originalArray];
    let step = Math.floor(array.length / SHRINK_FACTOR);

    while (step > 0) {
      this.callback();

      for (let i = 0; i + step < array.length; i++) {
        this.callback(array[i]);
        if (comparator.greatThan(array[i], array[i + step])) {
          Sort.swap(array, i, i + step);
        }
      }

      step = Math.floor(step / SHRINK_FACTOR);
    }

    return array;
  }
}
