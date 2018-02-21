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
    var i=0;
    var tmpArr = new Array(indices.length);
    
    for(i=0;i<indices.length;i++){
    	tmpArr[i] = this.array_[indices[i]];
    }

    if (this.compareFunction_ === undefined){
    	tmpArr.sort(function(a,b) {return a - b; });
    } else {
    	tmpArr.sort(this.compareFunction_);
    }
	
	indices.sort(function(a,b) {return a - b; });

	for(i=0;i<indices.length;i++){
    	this.array_[indices[i]] = tmpArr[i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunction_ = compareFunction;
  }
}


module.exports = Sorter;