import formatToMMDD from "./formatToMMDD";

const sortDataAfter = (data, selection, sortInReverseOrder) => {
  let sortedData = data;
  if (
    selection === "name" ||
    selection === "category" ||
    selection === "color"
  ) {
    sortedData = data.sort(function (a, b) {
      a = a[selection].toUpperCase();
      b = b[selection].toUpperCase();

      return a < b ? -1 : a > b ? 1 : 0;
    });
  } else {
    sortedData = data.sort(function (a, b) {
        a = a[selection]
        b = b[selection]

      if (selection === "created") {
        a = new Date(formatToMMDD(a));
        b = new Date(formatToMMDD(b));
      }

      return a - b;
    });
  }

  sortedData = sortInReverseOrder ? sortedData.reverse() : sortedData;

  return sortedData;
};

export default sortDataAfter;
