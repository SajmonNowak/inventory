const sortDataAfter = (data, selection, sortInReverseOrder) => {
  let sortedData = data;
  if (selection === "name" || selection === "category") {
    sortedData = data.sort(function (a, b) {
      a = a[selection].toUpperCase();
      b = b[selection].toUpperCase();

      return a < b ? -1 : a > b ? 1 : 0;
    });
  } else {
    sortedData = data.sort(function (a, b) {
      if (selection === "date") {
        a = new Date(a[selection]);
        b = new Date(b[selection]);
      }

      return a[selection] - b[selection];
    });
  }

  sortedData = sortInReverseOrder ? sortedData.reverse() : sortedData;

  return sortedData;
};

export default sortDataAfter;
