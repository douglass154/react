import type { ThemeAction } from "../types/ThemeReducer";
import type { UserAction } from "../types/UserReducer";

import { themeInitialState, themeReducer } from "./reducers/themeReducer";
import { userInitialState, userReducer } from "./reducers/userReducer";

// Exporting all initial states
export const InitialState = {
   theme: themeInitialState,
   user: userInitialState
};

// Exporting all reducers
export const Reducers = (state: InitialStateType, action: ActionType) => ({
   theme: themeReducer(state.theme, action),
   user: userReducer(state.user, action)
});

// Exporting all types
export type InitialStateType = typeof InitialState;
export type ActionType = ThemeAction | UserAction;