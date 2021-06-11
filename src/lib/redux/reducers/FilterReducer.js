import { FilterTypes } from '../types';

const initialState1 = {
    filterValues: {
        dayType: '',
        minT:    '',
        maxT:    '',
    },
};

export const FilterReducer = (state = initialState1, action) => {
    switch (action.type) {
    case FilterTypes.SET_FILTER: {
        console.log(action.payload);

        return {
            ...state,
            filterValues: {
                dayType: action.payload.dayType,
                minT:    action.payload.minT,
                maxT:    action.payload.maxT,
            },
        };
    }
    default: return state;
    }
};
