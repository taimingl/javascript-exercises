const ftoc = function(temp) {
  const result = (temp - 32) * (5/9);
  return Math.round((result + Number.EPSILON) * 10)/10;
};

const ctof = function(temp) {
  const result = temp * (9/5) + 32;
  return Math.round((result + Number.EPSILON)*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
