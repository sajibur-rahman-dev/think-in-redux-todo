import { FILTER_STATUS, FILTER_PRIORITY } from "./actionTypes";

export const filterByStatus = (statusKey) => {
  return {
    type: FILTER_STATUS,
    payload: {
      statusKey,
    },
  };
};

export const filterByPriority = (color, changeType) => {
  return {
    type: FILTER_PRIORITY,
    payload: {
      color,
      changeType,
    },
  };
};
