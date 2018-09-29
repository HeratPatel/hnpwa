import types from './types';
import { API_URI } from '../../constants';
import { errorHandler } from '../../utils/error-handler';

const storeItemDetails = (itemDetails) => ({
    type: types.STORE_ITEM_DETAILS,
    itemDetails
});

export const fetchItemDetails = (itemId) => async (dispatch) => {
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