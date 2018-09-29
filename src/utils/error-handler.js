import { showSnackbar } from '../redux/app/actions';

export const errorHandler = (dispatch, error) => {
    dispatch(showSnackbar({
        status: true,
        message: error
    }));
};