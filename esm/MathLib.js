const round = (num, places) => {
  return Number(num.toFixed(places))
};

const floor = num => {
  return Number((num - .5).toFixed())
};

const ceil = num => {
  return Number((num + .5).toFixed())
};

const pad = (num, before = 0, after = 0) => {
  let list = String(num).split('.');
  if (list.length === 1) {
    list.push('0');
  }
  list[0] = list[0].length < before ? '0'.repeat((before - list[0].length)) + list[0] : list[0];
  list[1] = list[1].length < after ? list[1] + '0'.repeat((after - list[1].length)) : list[1];
  return list.join('.')
};

const degToRad = (num) => {
  return round(num * Math.PI / 180, 4)
};

const radToDeg = (num) => {
  return round(num * 180 / Math.PI, 1)
};

const toDollars = (num) => {
  return "$" + pad(round(num, 2), 1, 2)
};

const tax = (num, rate) => {
  return pad(round(num * rate, 2), 1, 2)
};

const taxSum = (num, rate) => {
  return pad(round(num + Number(tax(num, rate)), 2), 1, 2)
};

const interest = (total, year, rate) => {
  var interest = rate / 100 + 1;
  return toDollars(total * Math.pow(interest, year))
};

const mortgage = (p, payments, interest) => {
  return toDollars(p * interest * (Math.pow(1 + interest, payments)) / (Math.pow(1 + interest, payments) - 1))
};

const intToHex = (int) => {
  return "#" + int.toString(16)
};

module.exports = { round, floor, ceil, pad, degToRad, radToDeg, toDollars, tax, taxSum, interest, mortgage, intToHex };
