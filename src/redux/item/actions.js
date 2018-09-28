import types from './types';
import { API_URI } from '../../constants';

const storeItemDetails = (itemDetails) => ({
    type: types.STORE_ITEM_DETAILS,
    itemDetails
});

export const fetchItemDetails = (itemId) => async (dispatch) => {
    const response = await fetch(`${API_URI}/item/${itemId}`);
    const data = await response.json();    
    dispatch(storeItemDetails(data));
};