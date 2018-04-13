import { combineReducers } from "redux";

import session from "./session_reducer";
import errors from "./errors_reducer";
import restaurants from "./restaurants_reducer";
import reviews from "./review_reducer";
import reservations from "./reservations_reducer";

const RootReducer = combineReducers({
  session,
  errors,
  restaurants,
  reviews,
  reservations,
});

export default RootReducer;
