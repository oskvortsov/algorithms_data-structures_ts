export class StaticArray<T> {
  private data: Array<T>;

  constructor(size: number) {
    this.data = Array.from({ length: size });
  }

  getAt(index: number) {
    if (index > this.data.length) {
      throw new Error('StaticArray: Out of range');
    }

    return this.data[index];
  }

  setAt(index: number, value: T) {
    if (index > this.data.length) {
      throw new Error('StaticArray: Out of range');
    }

    this.data[index] = value;
  }
}
