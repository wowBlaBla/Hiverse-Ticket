import { UPDATE_PROVIDER } from "../constant";

const data = {
    provider: undefined
}

export default function(state = data, action) {
    switch(action.type) {
        case UPDATE_PROVIDER:
            return { ...state, provider: action.payload };
            break;
        default:
            return data;
    }
}