const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

const insertHelper = (heap, index) => {
    const parentIndex = Math.ceil(index / 2) - 1;
    if (heap[parentIndex] < heap[index]) {
        insertHelper(swap(heap, index, parentIndex), parentIndex);
    }
    return heap
};

const insert = (heap, item) => {
    heap.push(item);
    return insertHelper(heap, heap.length - 1);
};

const removeHelper = (heap, index) => {
    const value = heap[index];
    const leftIndex = index * 2 + 1;
    const left = heap[leftIndex];
    const rightIndex = index * 2 + 1;
    const right = heap[rightIndex];
    if (value < left) {
        const swapIndex = left > right ? leftIndex : rightIndex;
        heap = swap(heap, index, swapIndex);
        return removeHelper(heap, swapIndex);
    }
    if (value < right) {
        heap = swap(heap, index, rightIndex);
        return removeHelper(heap, rightIndex);
    }
    return heap;
}

const removeMax = ( heap ) => {
    arr = swap(heap, 0, heap.length - 1);
    arr.pop();
    return removeHelper(heap, 0);
}

const sort = (heap) => {
    const result = [];
    while(heap.length) {
        result.push(heap[0]);
        removeMax(heap);
    }
    return result;
}
const heap = [13, 11, 9, 8, 6, 7, 5, 4];
insert(heap, 14);
console.log(heap)
removeMax(heap);
console.log(heap);
console.log(sort(heap));