export function getIndex (array = [], input = "") {
  const count = array.length

  if (count === 0) {
    return 0
  }

  if (input.localeCompare (array[count - 1]) >= 0) {
    return count
  }

  function getMidpoint (a, b) {
    return Math.floor ((b - a) / 2) + a
  }

  let start = 0
  let end = count - 1
  let index = getMidpoint (start, end)

  while (start < end) {
    const current = array[index].startsWith ("@")
      ? array[index].slice (1)
      : array[index]

    const compare = input.localeCompare (array[index])

    if (compare === 0) {
      break
    } else if (compare < 0) {
      end = index
    } else {
      start = index + 1
    }

    index = getMidpoint (start, end)
  }

  return index
}
