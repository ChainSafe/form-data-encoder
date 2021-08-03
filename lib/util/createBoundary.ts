const alphabet
  = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

/**
 * Generates a boundary string for FormData encoder.
 *
 * @param size The size of the resulting string
 */
function createBoundary(size: number): string {
  let res = ""

  while (size--) {
    // I use bitwise `<<` for slightly more performant string fill.
    // It will do basically the same thing as `Math.trunc()`,
    // except it only support signed 32-bit integers.
    // Because the result of this operation will always be
    // a number in range `0` and `alphabet.length - 1` (inclusive),
    // we don't need `Math.floor()` too.
    /* eslint no-bitwise: ["error", {"allow": ["<<"]}] */
    res += alphabet[(Math.random() * alphabet.length) << 0]
  }

  return res
}

export default createBoundary
