import { UPDATE_PROVIDER } from "../constant";

export const updateProvider = (state) = dispatch => {
    dispatch({
        type: UPDATE_PROVIDER,
        payload: state
    })
};

