import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../slices/projectSlice";
import authReducer from "../slices/authSlice";

export const store = configureStore({
    reducer: { 
        projects: projectReducer,
        auth: authReducer 
    },
});