import { useState } from "react";

const useSort = () => {
  const [sortSelection, setSortSelection] = useState();
  const [sortInReverseOrder, setSortInReverseOrder] = useState(false);

  const handleSortClick = (prop) => {
    if (sortSelection === prop) {
      setSortInReverseOrder(!sortInReverseOrder);
    } else {
      setSortInReverseOrder(false);
      setSortSelection(prop);
    }
  };

  return { sortSelection, sortInReverseOrder, handleSortClick };
};

export default useSort;
