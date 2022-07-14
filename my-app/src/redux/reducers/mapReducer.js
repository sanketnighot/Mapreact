import {ActionTypes} from '../constants/action-types'

const initialState = {
    map : []
}

export const mapReducer = (state = initialState , {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_MAP:
            return {...state, map: payload};
        default:
            return state;

    }
}


export const tileReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_TILE :
            return {...state, ...payload};
        default:
            return state;

    }
}