import { createStore } from "redux";
import { reducer } from "./reducer";

 const StoreTodoReducer = createStore(
reducer,
)

export default StoreTodoReducer;