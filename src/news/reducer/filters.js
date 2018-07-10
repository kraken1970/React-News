import {
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  DELETE_ARTICLE
} from "../constans";

const defaultFilter = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
};

export default (filters = defaultFilter, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_DATE_RANGE:
      //return Object.assign({}, filters, {dateRange: payload.dateRange})
      return { ...filters, dateRange: payload.dateRange };

    case CHANGE_SELECTION:
      return { ...filters, selected: payload.selected };

    case DELETE_ARTICLE:
      return {
        ...filters,
        selected: filters.selected.filtewr(id => id !== payload.id)
      };
  }

  return filters;
};