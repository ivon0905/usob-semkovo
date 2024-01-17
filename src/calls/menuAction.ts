import { GET_MENU_ITEMS } from "./actions";
import dataServices from "./services";

export const getMenuItems = () => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    try {
        const res = await dataServices.getMenuItems();
    
        dispatch({
          type: GET_MENU_ITEMS,
          payload: res.data,
        });
      } catch (err) {
        console.log(err);
      }
};