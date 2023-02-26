import { ADD_COLOR, FILTER_PRIORITY, FILTER_STATUS, REMOVE_COLOR } from "./actionTypes";
import filterIntialState from "./filterIntialState";

export default function filterReducer(state = filterIntialState, action) {
  switch (action.type) {
    case FILTER_STATUS:
      return {
        ...state,
        status: action.payload.statusKey,
      };

    case FILTER_PRIORITY:
      switch (action.payload.changeType) {
        case ADD_COLOR:
          return {
            ...state,
            colors: [...state.colors, action.payload.color],
          };

        case REMOVE_COLOR:
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== action.payload.color
            ),
          };

        default:
          return state;
      }
    default:
      return state;
  }
}
