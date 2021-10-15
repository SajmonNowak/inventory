var format = require('date-fns/format');

const formatDate = (date) => {
    return format(date, "dd-MM-yyyy H:mm:s");
}

const formatBack = (date) => {
    const dateArray = date.split("")

    const cases = [" ", "-", ":"]
    let num = dateArray.filter((x) => !cases.some(z => z === x))

return num.join("");
} 

console.log(formatBack("12-13-21 2:2:2"));

exports.formatDate = formatDate;
exports.formatBack = formatBack;