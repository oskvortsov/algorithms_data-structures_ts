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
        this.callback();
        if (comparator.greatThan(array[i], array[i + step])) {
          [array[i], array[i + step]] = [array[i + step], array[i]];
        }
      }

      step = Math.floor(step / SHRINK_FACTOR);
    }

    return array;
  }
}
