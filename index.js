// in an unsorted array, check whether there are any two numbers that will sum up to a given number 
// sumFinder([6, 4, 3, 2], 9) = true 
// sumFinder([6, 4, 3, 2], 2) = false

function sumFinder(arr, num) {
  let obj = {}
  let diff

  for (let i = 0; i < arr.length; i++) {
    diff = num - arr[i]

    if (obj[diff]) {
      return true
    } else {
      obj[arr[i]] = true
    }
  }
  return false
}

let sumFinderRes = sumFinder([6, 4, 3, 2], 1)

// sorting algorithm (selection sort)

function selectionSort(arr) {
  let sorted = []
  let min
  while (arr.length !== 0) {
    min = findMinAndRemove(arr)
    sorted.push(min)
  }
  return sorted
}

function findMinAndRemove(arr) {
  let min = arr[0]
  let minIdx = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
      minIdx = i
    }
  }
  arr.splice(minIdx, 1)
  return min
}

let selectionSortRes = selectionSort([5, 3, 6, 77, 88, 5, 6, 4, 3, 2])

// console.log(selectionSortRes)


