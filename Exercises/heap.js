
/*
Create a max-heap with the following basic operations:

1. Find-max
2. Insert
3. Extract-max : returns max after removing from heap
4. Delete-max : Removes the max from the heap (no return)
5. Replace :  pop root and push a new key
6. Size : returns number of items in the heap
*/

var Heap = function() {
    this.array = [];
};

Heap.prototype.findMax = function() {
    return this.array[0];
};

Heap.prototype.addValue = function(val) {
    this.array.push(val);
    var index = this.array.indexOf(val);
    var parent = Math.floor(index/2);

    while (this.array[parent] < this.array[index]) {
            if (parent !== index) {
            var temp = this.array[index];
            this.array[index] = this.array[parent];
            this.array[parent] = temp;
            index = parent;
            parent = Math.floor(index/2);
        }
    }
};

Heap.prototype.deleteMax = function() {
    this.array = this.array.slice(1);
};

Heap.prototype.extractMax = function() {
    var max = this.array[0];
    this.deleteMax();
    return max;
};

Heap.prototype.size = function() {
    return this.array.length;
}

Heap.prototype.replace = function(val) {
    this.extractMax();
    this.addValue(val);
}
