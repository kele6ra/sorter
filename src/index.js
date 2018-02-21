class Sorter {
  constructor(array_) {
    this.array_ = [];
  }

  add(element) {
   this.array_.push(element);
  }

  at(index) {
    return this.array_[index];
  }

  get length() {
    return this.array_.length;
  }

  toArray() {
    return this.array_;
  }

  sort(indices) {
    // your implementation
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;