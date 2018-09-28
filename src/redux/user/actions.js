import types from './types';
import { API_URI } from '../../constants';

const storeUserDetails = (userDetails) => ({
    type: types.STORE_USER_DETAILS,
    userDetails
});

export const fetchUserDetails = (user) => async (dispatch) => {
    const response = await fetch(`${API_URI}/user/${user}`);
    const data = await response.json();    
    dispatch(storeUserDetails(data));
};


