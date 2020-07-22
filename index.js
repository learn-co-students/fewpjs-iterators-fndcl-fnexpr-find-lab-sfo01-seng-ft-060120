const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (record) => {
  let result = record.find(record => record.result === "W")
  if (result != undefined) {
    return result.year
  }
}