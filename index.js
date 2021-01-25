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

let res = sumFinder([6, 4, 3, 2], 1)

console.log(res)