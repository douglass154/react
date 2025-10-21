import { createContext, useReducer, type ReactNode } from "react";
import { InitialState, Reducers, type ActionType, type InitialStateType } from "./config";

type Props = {
   children: ReactNode;
};

type ContextType = {
   state: InitialStateType;
   dispatch: React.Dispatch<ActionType>;
};

export const Context = createContext<ContextType>({
   state: InitialState,
   dispatch: () => {},
});

export const ContextProvider = ({ children }: Props) => {
   const [state, dispatch] = useReducer(Reducers, InitialState);

   return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>;
};
