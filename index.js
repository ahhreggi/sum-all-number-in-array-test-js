const sumItems = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
    let first = array[0];
    if (Array.isArray(first)) {
      first = sumItems(first);
    }
    return first + sumItems(array.slice(1));
  }
};

module.exports = sumItems;