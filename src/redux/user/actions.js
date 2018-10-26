import types from './types';
import { API_URI } from '../../constants';

const storeUserDetails = (userDetails) => ({
    type: types.STORE_USER_DETAILS,
    userDetails
});

export const fetchUserDetails = (user) => async (dispatch, getState, errorHandler) => {
    try {
        const response = await fetch(`${API_URI}/user/${user}`);
        const data = await response.json();
        if(data.error){            
            errorHandler(dispatch, data.error);
        }
        else{
            dispatch(storeUserDetails(data));    
        }           
    } catch (error) {
        errorHandler(dispatch, 'Error in fetch user details.');        
    }    
};


