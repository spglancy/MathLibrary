const { floor, round, ceil, degToRad, radToDeg, pad, toDollars, tax, taxSum, interest, mortgage, intToHex } = require('./index')
test("round", () => {
  expect(round(5.55)).toBe(6)
  expect(round(5.2)).toBe(5)
  expect(round(0)).toBe(0)
})

test('floor', () => {
  expect(floor(5.55)).toBe(5)
  expect(floor(.5)).toBe(0)
  expect(floor(1.9)).toBe(1)
})

test('ceil', () => {
  expect(ceil(3.2)).toBe(4)
  expect(ceil(6.8)).toBe(7)
  expect(ceil(4.1)).toBe(5)
})

test('pad', () => {
  expect(pad(3, 0, 2)).toBe("3.00")
  expect(pad(5.2, 1, 2)).toBe("5.20")
  expect(pad(1, 2, 1)).toBe('01.0')
})

test('degToRad', () => {
  expect(degToRad(90)).toBe(1.5708)
  expect(degToRad(15)).toBe(0.2618)
  expect(degToRad(180)).toBe(3.1416)
})

test('radToDeg', () => {
  expect(radToDeg(3.14159265)).toBe(180)
  expect(radToDeg(1.5708)).toBe(90)
  expect(radToDeg(.2618)).toBe(15)
})

test('toDollars', () => {
  expect(toDollars(18)).toBe('$18.00')
  expect(toDollars(6.723)).toBe('$6.72')
  expect(toDollars(.836)).toBe('$0.84')
})

test('tax', () => {
  expect(tax(10, .15)).toBe('1.50')
  expect(tax(100, .25)).toBe('25.00')
  expect(tax(5, .10)).toBe('0.50')
})

test('taxSum', () => {
  expect(taxSum(10, .15)).toBe('11.50')
  expect(taxSum(100, .25)).toBe('125.00')
  expect(taxSum(20, .10)).toBe('22.00')
})

test('interest', () => {
  expect(interest(100, 2, 100)).toBe('$400.00')
  expect(interest(1000, 1, 8)).toBe('$1080.00')
  expect(interest(5, 1, 10)).toBe('$5.50')
})

test('mortgage', () => {
  expect(mortgage(120000, 120, 3)).toBe("$360000.00")
})

test('intToHex', () => {
  expect(intToHex(15)).toBe('#f')
  expect(intToHex(9)).toBe('#9')
  expect(intToHex(255)).toBe('#ff')
})