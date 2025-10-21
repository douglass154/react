import type { ThemeAction } from "../types/ThemeReducer";
import { themeInitialState, themeReducer } from "./reducers/themeReducer";

// Exporting all initial states
export const InitialState = {
   theme: themeInitialState
};

// Exporting all reducers
export const Reducers = (state: InitialStateType, action: ActionType) => ({
   theme: themeReducer(state.theme, action)
});

// Exporting all types
export type InitialStateType = typeof InitialState;
export type ActionType = ThemeAction;