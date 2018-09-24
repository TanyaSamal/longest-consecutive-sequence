module.exports = function longestConsecutiveLength(array) {

  if (array.length == 0) return 0;

  if (array.length == 1) return 1;

  let maxLength = 1;

  let hashTable = new Set();

  for (let key in array) {
    hashTable.add(array[key]);
  }

  for (let i = 0, len = array.length; i < len; i++){
    let values = 1;

    let lNeighbor = array[i] - 1;

    while(hashTable.has(lNeighbor)){
        hashTable.delete(lNeighbor);
        values++;
        lNeighbor = lNeighbor - 1;
    }

    if (values > maxLength) maxLength = values;

    let rNeighbor = array[i] + 1;

    while(hashTable.has(rNeighbor)){
        hashTable.delete(rNeighbor);
        values++;
        rNeighbor++;
    }

    if (values > maxLength) maxLength = values;
}

  return maxLength;
}
