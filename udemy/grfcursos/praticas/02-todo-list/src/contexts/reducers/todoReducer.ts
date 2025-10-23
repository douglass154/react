import type { TodoActions, TodoState } from "../../@types/todoReducer";

export const initialState: TodoState = [];

export const todoReducer = (state: TodoState, action: TodoActions): TodoState => {
   switch(action.type) {
      case "ADD":
         const { payload } = action;
         return !Array.isArray(payload) ? [...state, payload] : payload;

      case "CHANGE":
         const changedTodos = state.map((item, index) => {
            if(index === action.payload.index) {
               item.title = action.payload.title ?? item.title;
               item.isDone = action.payload.isDone ?? item.isDone;
            }

            return item
         })

         return changedTodos;

      case "DELETE":
         return state.filter((_, index) => index !== action.payload.index);

      default:
         return state
   }
}