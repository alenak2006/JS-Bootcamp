'use strict'

function deepEqual(obj1, obj2) {
  // check if number of properties are the same
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false
  }

  for (let key in obj1) {
    if (obj1.hasOwnProperty([key]) && obj2.hasOwnProperty([key])) {
      // if property is an object then recurse
      if (typeof obj1[key] === 'object') {
        if (deepEqual(obj1[key], obj2[key])) {
          continue
        }
        return false
      }
      // toString() will ensure that content of the Functions will also be compared instead of their reference value
      if (obj1[key].toString() === obj2[key].toString()) {
        continue
      }
      return false
    }
    return false
  }
  return true
}

var obj1 = { a: 'test', b: 12 }
var obj2 = { a: 'test', b: 12 }
deepEqual(obj1, obj2)

var elem = document.querySelector('h1')
elem.innerHTML = 'here it is'
