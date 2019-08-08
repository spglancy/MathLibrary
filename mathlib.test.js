const { floor, round, goldenRatio, ceil, degToRad, radToDeg, pad, toDollars, tax, taxSum, mortgage, randNum, intToHex } = require('./index')
test("round", () => {
  expect(round(5.55)).toBe(6)
  expect(round(5.2)).toBe(5)
  expect(round(0)).toBe(0)
})
