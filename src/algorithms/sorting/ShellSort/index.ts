import { Sort } from '../Sort';

export class ShellSort extends Sort {
  protected sortMethod<T>(
    originalArray: Array<T>,
    comparator = this.comparator,
  ): Array<T> {
    const array = [...originalArray];
    const size = array.length;

    for (const gap of ShellSort.hilbbardSequence(size)) {
      for (let i = gap; i < size; i++) {
        this.callback(i);

        for (
          let j = i;
          j > 0 && comparator.lessThan(array[j], array[j - gap]);
          j -= gap
        ) {
          this.callback(j);
          Sort.swap(array, j, j - gap);
        }
      }
    }

    return array;
  }

  private static *hilbbardSequence(size: number) {
    let index = Math.floor(Math.log2(size));
    let gap = size;

    while (gap > 0) {
      gap = Math.pow(2, index) - 1;
      index--;
      yield gap;
    }
  }
}
