import { SequenceSet } from '../Recitation2';

const inputData = [
  { key: 1, value: 1000 },
  { key: 2, value: 2000 },
  { key: 3, value: 3333 },
  { key: 4, value: 7777 },
];
const inputDataValuesSet = new Set(inputData.map((i) => i.value));

describe('SequenceSet: ', () => {
  const sequence = new SequenceSet<number>();

  it('should be defined', () => {
    expect(sequence).not.toBeUndefined();
  });

  it('method build should create Map', () => {
    sequence.build(inputData);
    expect(sequence.find(1) === 1000 && sequence.find(4) === 7777).toBeTruthy();
  });

  it('len should return the same size that have input data', () => {
    expect(sequence.len() === inputData.length).toBeTruthy();
  });

  it('iterateOrder should be return iterable', () => {
    for (const value of sequence.iterateOrder()) {
      expect(inputDataValuesSet.has(value)).toBeTruthy();
    }
  });

  it('insert should add new item and replace exist with the same key', () => {
    const newItem = { key: 5, value: 9999 };
    const existKeyItem = { key: 4, value: 4444 };

    sequence.insert(newItem);
    sequence.insert(existKeyItem);

    expect(
      sequence.find(newItem.key) === newItem.value &&
        sequence.find(existKeyItem.key) === existKeyItem.value,
    );
  });

  it('findMin should return 1 item', () => {
    const minItem = sequence.findMin();
    expect(minItem).toEqual({ key: 1, value: 1000 });
  });

  it('findMax should return 5 item', () => {
    const maxItem = sequence.findMax();
    expect(maxItem).toEqual({ key: 5, value: 9999 });
  });

  it('findNext for 3 should return 4 item', () => {
    const nextItem = sequence.findNext(3);
    expect(nextItem.key).toEqual(4);
  });

  it('findPrev for 3 should return 2 item', () => {
    const nextItem = sequence.findPrev(3);
    expect(nextItem.key).toEqual(2);
  });

  it('seq.delete by 5 should return and delete item with key 5 from sequence', () => {
    const deletedItem = sequence.delete(5);
    expect(
      sequence.find(5) === undefined && deletedItem.value === 9999,
    ).toBeTruthy();
  });
});
