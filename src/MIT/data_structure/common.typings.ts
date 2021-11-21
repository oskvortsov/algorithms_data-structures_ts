// L02, L07 - number of lecture MIT (6.006)
export interface Sequence<T> {
  // Container
  build(items: T[]): void; // given an iterable items, build sequence from items
  len(): number; // return the number of stored items

  // Static
  iterateSeq(): Iterable<T>; // return the store items one-by-one in sequence order
  getAt(index: number): T; // return the i-th item
  setAt(index: number, value: T): void; // replace the i-th item with value

  // Dynamic
  insertAt(index: number, value: T): void; // add value as the i-th item
  deleteAt(index: number): T; // remove and return the i-th item
  insertFirst(value: T): void; // insert value as first item
  deleteFirst(): T; // remove and return first item
  insertLast(value: T): void; // insert value as last item
  deleteLast(): T; // remove and return last item;
}

// L03-L08 - number of lecture MIT (6.006)
export interface CustomSet<T> {
  // Container
  build(items: T[]): void; // given an iterable items, build sequence from items
  len(): number; // return the number of stored items

  // Static
  find(key: T): T | undefined; // return the store item with key

  // Dynamic
  insert(value: T): void; // add value to set (replace item with the same key if one already exists)
  delete(key: number): void; // remove and return the stored item with key

  // Order
  iterateOrder(): Iterable<T>; // return the stored items one-by-one in key order
  findMin(): T; // return the stored item with smallest key
  findMax(): T; // return the stored item with largest key
  findNext(k: T): T | undefined; // return the stored item with smallest key larger than k
  findPrev(k: T): T | undefined; // return the stored item with largest key smaller than k
}
