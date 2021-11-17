const formatToMMDD = (dateInDDMMFormat) => {
  const time = dateInDDMMFormat.split(" ")[1];
  const dateArray = dateInDDMMFormat.split(" ")[0].split("-");
  const day = dateArray[0];
  dateArray[0] = dateArray[1];
  dateArray[1] = day;

  const newDate = dateArray.join("-") + " " + time;

  return newDate;
};

export default formatToMMDD;
