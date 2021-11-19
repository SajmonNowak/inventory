var format = require("date-fns/format");

const formatDate = (date) => {
  return format(date, "dd-MM-yyyy H:mm:s");
};

exports.formatDate = formatDate;
