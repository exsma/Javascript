"use strict";


// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (const idx in items) {
    console.log(idx);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {

  result = []
  for (const i of items) {
    if (i % 2 === 0) {
      result.push(items[i]);
    }
  }
  console.log(result)
}


// 3. smallestNItems
function smallestNItems(items, n) {
//   // Replace this with your code
// }
num_list = []
for (item in items) {
  num_list.push(item);
}
num_list.sort((items, n) => items - n);
console.log(num_list);
}
        // def smallest_n_items(items, n):
        //     """Print a list of the `n` smallest integers in `items`.

        //     Order the integers in descending order.

        //     You can assume that `n` will be less than the length of the list.

        //     Arguments:
        //         items (list[int]): A list of integers
        //         n (int): Desired length for the resulting list
        //     """

        //     sorted_items = sorted(items)
        //     sorted_n_items = sorted_items[:n]
        //     sorted_n_items.reverse()

        //     print(sorted_n_items)