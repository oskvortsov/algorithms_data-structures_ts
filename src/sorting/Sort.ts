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
  // great<T>(first: T, second: T) {
  //   return this.compare(first, second) > 0;
  // }

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

  abstract sort<T>(arr: Array<T>): Array<T>;
  abstract reverseSort<T>(arr: Array<T>): Array<T>;
  protected abstract sortMethod<T>(
    arr: Array<T>,
    comparator: Comparator,
  ): Array<T>;
}
