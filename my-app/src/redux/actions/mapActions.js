import {ActionTypes} from '../constants/action-types'

export const setMap = (map) => {
    return {
        type    : ActionTypes.SET_MAP,
        payload : map
    }
}


export const selectedTile = (tile) => {
    return {
        type    : ActionTypes.SELECTED_TILE,
        payload : tile
    }
}