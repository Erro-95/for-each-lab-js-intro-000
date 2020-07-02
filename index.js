function iterativeLog(array){
  array.forEach((element, index, array) => {
      console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  const arr = ['apple', 'grape', 'orange']

  return arr.forEach(callback => {
    return arr
  })
}
