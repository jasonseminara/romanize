const romanize = function (num) {

  // let's make sure it's actually an integer
  let number = Number.parseInt(num, 10);

  const translation = [
    {arabic: 1000, roman: 'M'},
    {arabic:  900, roman: 'CM'},
    {arabic:  500, roman: 'D'},
    {arabic:  400, roman: 'CD'},
    {arabic:  100, roman: 'C'},
    {arabic:   90, roman: 'XC'},
    {arabic:   50, roman: 'L'},
    {arabic:   40, roman: 'XL'},
    {arabic:   10, roman: 'X'},
    {arabic:    9, roman: 'IX'},
    {arabic:    5, roman: 'V'},
    {arabic:    4, roman: 'IV'},
    {arabic:    1, roman: 'I'}
  ];

  return translation.reduce( (result, map) => {
    while (number >= map.arabic) {
      result += map.roman;
      number -= map.arabic;
    }
    //debugger
    return result;

  // this is the initial empty result variable
  }, '');

};

module.exports = romanize;
