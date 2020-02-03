const mapToNegativize = array => {
  let newArray = []
  array.forEach(element => {
    newArray.push(-element)
  });
  return newArray
}

const mapToNoChange = array => {
  let newArray = []
  array.forEach(element => {
    newArray.push(element)
  });
  return newArray
}

const mapToDouble = array => {
  let newArray = []
  array.forEach(element => {
    newArray.push(element*2)
  });
  return newArray
}

const mapToSquare = array => {
  let newArray = []
  array.forEach(element => {
    newArray.push(element**2)
  });
  return newArray
}

const reduceToTotal = (array, initial = 0) => {
  let total = initial
  array.forEach(element => {
    total += element
  });
  return total
}

const reduceToAllTrue = array => {
  let output = true
  array.forEach(element => {
    if (!element) {
      output = false
    }
  });
  return output
}

const reduceToAnyTrue = array => {
  let output = false
  array.forEach(element => {
    if (!!element) {
      output = true
    }
  });
  return output
}
