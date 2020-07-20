const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (array) => {
  let result
  array.find( year => {
    if (year.result === 'W') {
      result = year.year
    }})
  return result
}