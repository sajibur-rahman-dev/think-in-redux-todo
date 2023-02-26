import { FILTER_PRIORITY, FILTER_STATUS } from "./actionTypes";
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
        case "addedColor":
          return {
            ...state,
            colors: [...state.colors, action.payload.color],
          };

        case "removeColor":
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
