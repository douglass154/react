// Redux
import { resetMessage } from "../slices/photoSlice";

export const useResetComponentMessage = dispatch => {
   return () => {
      setTimeout(() => {
         dispatch(resetMessage());
      }, 2 * 1000);
   };
};
