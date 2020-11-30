/* eslint-disable no-mixed-operators */
/* eslint-disable no-bitwise */

export default function base64Decode(array) {
  array = array.replace(/\s|=/g, '')
  let cur
  let prev
  let mod
  let i
  const result = []
  const base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

  while (i < array.length) {
    cur = base64EncodeChars.indexOf(array.charAt(i))
    mod = i % 4


    switch (mod) {
      case 0:
        break
      case 1:
        result.push(String.fromCharCode(prev << 2 | cur >> 4))
        break
      case 2:
        result.push(String.fromCharCode((prev & 0x0f) << 4 | cur >> 2))
        break
      case 3:
        result.push(String.fromCharCode((prev & 3) << 6 | cur))
        break
      default:
        break
    }


    prev = cur
    i++
  }


  return result.join('')
}
