exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function (arr, item) {
    var storageArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        storageArray.push(arr[i]);
      }
    }
    return storageArray;
  },

  removeWithoutCopy: function (arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    var itemCount = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        itemCount++;
      }
    }
    return itemCount;
  },

  duplicates: function (arr) {
    var occurencies = {};
    var duplicatesArray = [];
    arr.sort();

    for (var i = 0; i < arr.length; i++) {
      occurencies[arr[i]] = occurencies[arr[i]] ? occurencies[arr[i]] + 1 : 1;
    };

    for (var key in occurencies) {
      if (occurencies.hasOwnProperty(key) && occurencies[key] > 1) {
        duplicatesArray.push(key);
      }
    }

    return duplicatesArray;

    // TODO:
    // fix maybe according to this scheme
    // [
    //   {
    //     key: 1,
    //     occurencies: 2
    //   },
    //   {
    //     key: 2,
    //     occurencies: 1
    //   },
    //   ...
    //   {
    //     key: n,
    //     occurencies: 3
    //   }
    // ]
  },

  square: function (arr) {
    var squaredArray = [];
    for (var i = 0; i < arr.length; i++) {
      squaredArray.push(Math.pow(arr[i], 2));
    }
    return squaredArray;
  },

  findAllOccurrences: function (arr, target) {
    var occurenciesArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurenciesArray.push(i);
      };
    }
    return occurenciesArray;
  }
};
