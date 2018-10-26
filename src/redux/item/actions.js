import types from './types';
import { API_URI } from '../../constants';

const storeItemDetails = (itemDetails) => ({
    type: types.STORE_ITEM_DETAILS,
    itemDetails
});

export const fetchItemDetails = (itemId) => async (dispatch, getState, errorHandler) => {
    try {
        const response = await fetch(`${API_URI}/item/${itemId}`);
        const data = await response.json();        
        if(data.error){            
            errorHandler(dispatch, data.error);
        }
        else{
            dispatch(storeItemDetails(data));
        } 
    } catch (error) {
        errorHandler(dispatch, 'Error in fetch item details.');
    }    
};