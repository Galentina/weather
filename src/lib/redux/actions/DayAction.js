import { DayTypes } from '../types';

export const setDays = (data) => {
    return {
        type:    DayTypes.SET_DAYS,
        payload: data,
    };
};

export const setChosenDays = (data) => {
    return {
        type:    DayTypes.SET_CHOSEN_DAYS,
        payload: data,
    };
};

