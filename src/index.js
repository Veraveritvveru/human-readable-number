const digits = {
   0: 'zero',
   1: 'one',
   2: 'two',
   3: 'three',
   4: 'four',
   5: 'five',
   6: 'six',
   7: 'seven',
   8: 'eight',
   9: 'nine',
   10: 'ten',
   11: 'eleven',
   12: 'twelve',
   13: 'thirteen',
   14: 'fourteen',
   15: 'fifteen',
   16: 'sixteen',
   17: 'seventeen',
   18: 'eighteen',
   19: 'nineteen',
   20: 'twenty',
   30: 'thirty',
   40: 'forty',
   50: 'fifty', 
   60: 'sixty', 
   70: 'seventy',
   80: 'eighty', 
   90: 'ninety',
}


module.exports = function toReadable (number) {
   let result = '';
   if (number > 100) {
      let hundreds = number - number % 100;
      if (number % 100 === 0) {
         return digits[hundreds / 100] + ' hundred';
      } else {
         result += digits[hundreds / 100] + ' hundred ';
         let tens = number - hundreds;
         if (tens <= 20 || tens % 10 === 0) {
            result += digits[tens];
         } else {
            result += digits[tens - tens % 10] + ' ' + digits[tens - (tens - tens % 10)]
         } 
         return result;
      }
   }

   if (number === 100) return 'one hundred';

   if (number < 100) {
      if (number % 10 == 0 || number < 20) return digits[number];
      let tens = number - number % 10;
      result += digits[tens] + ' ' + digits[number - tens];
      return result;
   }
}
