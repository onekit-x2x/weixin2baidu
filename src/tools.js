/* eslint-disable no-bitwise */
export default function base64Encode(str) {
  let c1
  let c2
  let c3
  const base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  let i = 0
  const len = str.length
  let string = ''

  while (i < len) {
    // eslint-disable-next-line no-bitwise
    c1 = str.charCodeAt(i++) & 0xff
    if (i === len) {
      string += base64EncodeChars.charAt(c1 >> 2)
      string += base64EncodeChars.charAt((c1 & 0x3) << 4)
      string += '=='
      break
    }
    c2 = str.charCodeAt(i++)
    if (i === len) {
      string += base64EncodeChars.charAt(c1 >> 2)
      string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4))
      string += base64EncodeChars.charAt((c2 & 0xF) << 2)
      string += '='
      break
    }
    c3 = str.charCodeAt(i++)
    string += base64EncodeChars.charAt(c1 >> 2)
    string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4))
    string += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6))
    string += base64EncodeChars.charAt(c3 & 0x3F)
  }
  return string
}
