var romanize = function (number) {
  
  // let's make sure it's actually an integer
  number = parseInt(number);

  return [
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
  ]

  .reduce( (result, mapping) => {
    while (number >= mapping.arabic) {
      result += mapping.roman;
      number -= mapping.arabic;
    }
    //debugger
    return result;
  
  // this is the initial  empty result variable
  }, '');

};

console.log(romanize(1948)==='MCMXLVIII')
console.log(romanize('948')==='CMXLVIII')