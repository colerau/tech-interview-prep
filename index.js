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

// merging two sorted arrays into one sorted array without having to sort again

function merge(arr1, arr2) {
  let sorted = []
  let min
  while (arr1.length !== 0 && arr2.length !== 0) {
    min = mergeFindMinAndRemove(arr1, arr2)
    sorted.push(min)
  }
  return sorted.concat(arr1).concat(arr2)
}

function mergeFindMinAndRemove(arr1, arr2) {
  let arr1Min = arr1[0]
  let arr2Min = arr2[0]

  if (arr1Min < arr2Min) {
    return arr1.shift()
  } else {
    return arr2.shift()
  }
}

let mergeRes = merge([2, 4, 6, 8, 12, 55], [1, 3, 7, 9, 10, 11, 54])

// determine if there are any duplicates in a string

function duplicates(str) {
  let obj = {}
  let array = str.split("")
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]] += 1
    } else {
      obj[array[i]] = 1
    }
  }

  let flag = 0

  Object.keys(obj).forEach(key => {
    let value = obj[key]
    if (value > 1) {
      flag = 1
    }
  })

  if (flag === 1) {
    return true 
  } else {
    return false
  }
 
}

let duplicatesRes = duplicates("abcdefgh")

// get rid of duplicates without using Set

function unique(array) {
  let uniqueArray = array.filter((el, index) => {
    return array.indexOf(el) === index
  })
  return uniqueArray
}

let uniqueRes = unique([1, 2, 2, 3, 3, 3, 5, 6, 6, 6, 6, 6, 8, 8, 8, 9, 11, 12, 13, 14, 15, 15, 17, 9, 9, 9])

console.log(uniqueRes)
