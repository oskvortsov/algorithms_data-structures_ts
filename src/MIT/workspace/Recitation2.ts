import {
  CustomSet,
  CustomSetKey,
  CustomSetItem,
} from '../data_structure/common.typings';

export class SequenceSet<T> implements CustomSet<T> {
  private data: Map<CustomSetKey, T>;

  constructor() {
    this.data = new Map<CustomSetKey, T>();
  }

  build(arr: Array<CustomSetItem<T>>): void {
    arr.forEach(({ key, value }) => {
      this.data.set(key, value);
    });
  }

  len(): number {
    return this.data.size;
  }

  find(key: CustomSetKey): T {
    return this.data.get(key);
  }

  insert(item: CustomSetItem<T>): void {
    this.data.set(item.key, item.value);
  }

  delete(key: CustomSetKey): CustomSetItem<T> {
    const value = this.data.get(key);
    this.data.delete(key);
    return { key, value };
  }

  iterateOrder(): Iterable<T> {
    return this.data.values();
  }

  findMin(): CustomSetItem<T> {
    let min: CustomSetItem<T> = undefined;

    for (const [key, value] of this.data) {
      if (min === undefined || value < min.value) {
        min = { key, value };
      }
    }

    return min;
  }

  findMax(): CustomSetItem<T> {
    let max: CustomSetItem<T> = undefined;

    for (const [key, value] of this.data) {
      if (max === undefined || value > max.value) {
        max = { key, value };
      }
    }

    return max;
  }

  findNext(inputKey: CustomSetKey): CustomSetItem<T> {
    let result: CustomSetItem<T> = undefined;

    for (const [key, value] of this.data) {
      if (key > inputKey) {
        if (result === undefined || key < result.key) {
          result = { key, value };
        }
      }
    }

    return result;
  }

  findPrev(inputKey: CustomSetKey): CustomSetItem<T> | undefined {
    let result: CustomSetItem<T> = undefined;

    for (const [key, value] of this.data) {
      if (key < inputKey) {
        if (result === undefined || result.key < key) {
          result = { key, value };
        }
      }
    }

    return result;
  }
}
