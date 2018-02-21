const assert = require('assert');
Object.freeze(assert);
const Sorter = require('./src/index.js');

describe('Sorter', () => {
  let sorter;

  beforeEach(() => {
    sorter = new Sorter();
  });

  it('adds element', () => {
    sorter.add(5);

    assert.deepEqual(sorter.toArray(), [5]);
    assert.deepEqual(sorter.length, 1);
  });

  it('adds different types', () => {
    sorter.add('123');
    sorter.add(123);
    sorter.add(new Number(123));
    sorter.add(Symbol(123));

    assert.deepEqual(sorter.length, 4);
  });

describe('sorts numbers by default', () => {
    it('1', () => {
      sorter.add(5);
      sorter.sort([0]);
  
      assert.deepEqual(sorter.toArray(), [5]);
      assert.deepEqual(sorter.length, 1);
    });

    it('2', () => {
      sorter.add(5);
      sorter.add(6);
      sorter.sort([0]);
  
      assert.deepEqual(sorter.toArray(), [5, 6]);
      assert.deepEqual(sorter.length, 2);
    });

    it('3', () => {
      sorter.add(7);
      sorter.add(6);
      sorter.add(5);
      sorter.sort([0, 1, 2]);
  
      assert.deepEqual(sorter.toArray(), [5, 6, 7]);
      assert.deepEqual(sorter.length, 3);
      assert.deepEqual(sorter.at(0), 5);
      assert.deepEqual(sorter.at(1), 6);
      assert.deepEqual(sorter.at(2), 7);
    });

    it('3', () => {
      sorter.add(7);
      sorter.add(6);
      sorter.add(5);
      sorter.sort([0, 1]);
  
      assert.deepEqual(sorter.toArray(), [6, 7, 5]);
      assert.deepEqual(sorter.length, 3);
      assert.deepEqual(sorter.at(0), 6);
      assert.deepEqual(sorter.at(1), 7);
      assert.deepEqual(sorter.at(2), 5);
    });

    it('4', () => {
      sorter.add(7);
      sorter.add(6);
      sorter.add(5);
      sorter.sort([1, 2]);
  
      assert.deepEqual(sorter.toArray(), [7, 5, 6]);
      assert.deepEqual(sorter.length, 3);
      assert.deepEqual(sorter.at(0), 7);
      assert.deepEqual(sorter.at(1), 5);
      assert.deepEqual(sorter.at(2), 6);
    });

    it('5', () => {
      sorter.add(7);
      sorter.add(6);
      sorter.add(5);
      sorter.sort([0, 1, 2]);

      sorter.add(3);
  
      assert.deepEqual(sorter.toArray(), [5, 6, 7, 3]);
      assert.deepEqual(sorter.length, 4);
      assert.deepEqual(sorter.at(0), 5);
      assert.deepEqual(sorter.at(1), 6);
      assert.deepEqual(sorter.at(2), 7);
      assert.deepEqual(sorter.at(3), 3);
    });

    it('6', () => {
      sorter.add(7);
      sorter.add(6);
      sorter.add(5);
      sorter.sort([0, 1, 2]);

      sorter.add(3);
      sorter.add(2);
      sorter.add(1);
      sorter.sort([0, 1, 2]);
  
      assert.deepEqual(sorter.toArray(), [5, 6, 7, 3, 2, 1]);
      assert.deepEqual(sorter.length, 6);
      assert.deepEqual(sorter.at(0), 5);
      assert.deepEqual(sorter.at(1), 6);
      assert.deepEqual(sorter.at(2), 7);
      assert.deepEqual(sorter.at(3), 3);
    });

    it('7', () => {
      sorter.add(6);
      sorter.add(5);
      sorter.sort([0, 1]);

      sorter.add(2);
      sorter.add(1);
      sorter.sort([0, 1]);
  
      assert.deepEqual(sorter.toArray(), [5, 6, 2, 1]);
      assert.deepEqual(sorter.length, 4);
      assert.deepEqual(sorter.at(0), 5);
      assert.deepEqual(sorter.at(1), 6);
      assert.deepEqual(sorter.at(2), 2);
      assert.deepEqual(sorter.at(3), 1);
    });

    it('8', () => {
      sorter.add(6);
      sorter.add(5);
      sorter.sort([0, 1]);

      sorter.add(2);
      sorter.add(1);
      sorter.sort([1, 0]);
  
      assert.deepEqual(sorter.toArray(), [5, 6, 2, 1]);
      assert.deepEqual(sorter.length, 4);
      assert.deepEqual(sorter.at(0), 5);
      assert.deepEqual(sorter.at(1), 6);
      assert.deepEqual(sorter.at(2), 2);
      assert.deepEqual(sorter.at(3), 1);
    });

    it('9', () => {
      sorter.add(6);
      sorter.add(5);
      sorter.add(2);
      sorter.add(1);

      sorter.sort([1, 2]);
      sorter.sort([2, 3]);
  
      assert.deepEqual(sorter.toArray(), [6, 2, 1, 5]);
      assert.deepEqual(sorter.length, 4);
      assert.deepEqual(sorter.at(0), 6);
      assert.deepEqual(sorter.at(1), 2);
      assert.deepEqual(sorter.at(2), 1);
      assert.deepEqual(sorter.at(3), 5);
    });

    it('10', () => {
      sorter.add(6);
      sorter.add(5);
      sorter.add(2);
      sorter.add(1);

      sorter.sort([2, 1]);
      sorter.sort([2, 3]);
  
      assert.deepEqual(sorter.toArray(), [6, 2, 1, 5]);
      assert.deepEqual(sorter.length, 4);
      assert.deepEqual(sorter.at(0), 6);
      assert.deepEqual(sorter.at(1), 2);
      assert.deepEqual(sorter.at(2), 1);
      assert.deepEqual(sorter.at(3), 5);
    });

    it('11', () => {
      sorter.add(6);
      sorter.add(5);
      sorter.add(2);
      sorter.add(1);

      sorter.sort([2, 1]);
      sorter.sort([3, 2]);
  
      assert.deepEqual(sorter.toArray(), [6, 2, 1, 5]);
      assert.deepEqual(sorter.length, 4);
      assert.deepEqual(sorter.at(0), 6);
      assert.deepEqual(sorter.at(1), 2);
      assert.deepEqual(sorter.at(2), 1);
      assert.deepEqual(sorter.at(3), 5);
    });

    it('12', () => {
      sorter.add(6);
      sorter.add(5);
      sorter.add(20);
      sorter.add(10);

      sorter.sort([2, 1]);
      sorter.sort([3, 2]);
  
      assert.deepEqual(sorter.toArray(), [6, 5, 10, 20]);
      assert.deepEqual(sorter.length, 4);
      assert.deepEqual(sorter.at(0), 6);
      assert.deepEqual(sorter.at(1), 5);
      assert.deepEqual(sorter.at(2), 10);
      assert.deepEqual(sorter.at(3), 20);
    });

    it('13', () => {
      sorter.add(6);
      sorter.add(5);
      sorter.add(20);
      sorter.add(10);
      sorter.add(100);

      sorter.sort([2, 1]);
      sorter.sort([3, 2]);
      sorter.sort([4, 3]);
  
      assert.deepEqual(sorter.toArray(), [6, 5, 10, 20, 100]);
      assert.deepEqual(sorter.length, 5);
      assert.deepEqual(sorter.at(0), 6);
      assert.deepEqual(sorter.at(1), 5);
      assert.deepEqual(sorter.at(2), 10);
      assert.deepEqual(sorter.at(3), 20);
      assert.deepEqual(sorter.at(4), 100);
    });

    it('14', () => {
      sorter.add(6);
      sorter.add(5);
      sorter.add(20);
      sorter.add(10);
      sorter.add(100);

      sorter.sort([2, 1]);
      sorter.sort([3, 2]);
      sorter.sort([4, 3]);

      sorter.add(1000);
  
      assert.deepEqual(sorter.toArray(), [6, 5, 10, 20, 100, 1000]);
      assert.deepEqual(sorter.length, 6);
      assert.deepEqual(sorter.at(0), 6);
      assert.deepEqual(sorter.at(1), 5);
      assert.deepEqual(sorter.at(2), 10);
      assert.deepEqual(sorter.at(3), 20);
      assert.deepEqual(sorter.at(4), 100);
      assert.deepEqual(sorter.at(5), 1000);
    });
  });
  
});
