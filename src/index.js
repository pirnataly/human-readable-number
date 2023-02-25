module.exports = function toReadable(number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const top_ten = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    let str = String(number).split('');
    let strLength = str.length;
    let result = '';
    switch (strLength) {
        case 3:
               if (str[1] === "0") {
                  if (str[2] === '0') {
                        return  result = result + hundreds[str[0] - 1];
                } else {
                         return  result = result + hundreds[str[0] - 1] + ' ' + units[str[2]];
                }
            }
            if (str[1] === '1') {
           result = result + hundreds[str[0] - 1] + ' ' + top_ten[str[2]];
            } else if (str[2] === '0') {
                      result = result + hundreds[str[0] - 1] + ' ' + tens[str[1] - 2];
            } else {
            result = result + hundreds[str[0] - 1] + " " + tens[str[1] - 2] + ' ' + units[str[2]];
            }
            break;
        case 2:
            if (str[0] === '1') {
                result = result + top_ten[str[1]];
            } else if (str[1] === "0") {
               result = result + tens[str[0] - 2];
            } else {
                result = result + tens[str[0] - 2] + " " + units[str[1]];
            }
            break;
        case 1:
             result = result + units[str[0]];
              }

    return result;
}






