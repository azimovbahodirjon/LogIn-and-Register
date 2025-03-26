import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/userSlice";
export { default as Register } from "../pages/Register";

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
export default store;
