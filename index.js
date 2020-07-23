const testVar = {}

const superbowlWin = (records) => {
  let record = records.find(record => record.result == 'W')
  return record ? record.year : undefined
}