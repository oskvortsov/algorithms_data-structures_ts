type CompareResult = 1 | 0 | -1;
type TypeCompare = <T>(first: T, second: T) => CompareResult;

function defaultCompareFn<T>(first: T, second: T): CompareResult {
  if (first === second) return 0;
  return first < second ? -1 : 1;
}

function defaultCallback() {
  return;
}

interface SortOptions {
  compareFn?: TypeCompare;
  callback?: <T>(element?: T) => void;
}

class Comparator {
  public compare: TypeCompare;

  constructor(compareFn?: TypeCompare) {
    this.compare = compareFn || defaultCompareFn;
  }

  lessThan<T>(first: T, second: T) {
    return this.compare(first, second) < 0;
  }

  // equal<T>(first: T, second: T) {
  //   return this.compare(first, second) === 0;
  // }
  //

  greatThan<T>(first: T, second: T) {
    return this.compare(first, second) > 0;
  }

  reverse() {
    return new Comparator((first, second) => this.compare(second, first));
  }
}

export abstract class Sort {
  comparator: Comparator;
  callback: <T>(element?: T) => void;

  constructor(options?: SortOptions) {
    this.comparator = new Comparator(options?.compareFn);
    this.callback = options?.callback || defaultCallback;
  }

  sort<T>(array: Array<T>): Array<T> {
    return this.sortMethod(array);
  }

  reverseSort<T>(array: Array<T>): Array<T> {
    const revereComparator = this.comparator.reverse();
    return this.sortMethod(array, revereComparator);
  }

  protected static swap<T>(
    array: Array<T>,
    first: number,
    second: number,
  ): void {
    [array[first], array[second]] = [array[second], array[first]];
  }

  protected abstract sortMethod<T>(
    array: Array<T>,
    comparator?: Comparator,
  ): Array<T>;
}
