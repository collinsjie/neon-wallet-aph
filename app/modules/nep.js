/**
 * Created by Andrexxjc on 15/11/2017.
 */

// Constants
export const SET_NEP5 = 'SET_NEP5';
export const ADD_NEP5 = 'ADD_NEP5';
export const ADD_HASH_BALANCE = 'ADD_HASH_BALANCE';

let initialNep5ReducerState = [];

// Actions
export function setNep5(nep5){
    return {
        type: SET_NEP5,
        nep5: nep5
    }
}

export function addNep5(hashToAdd){
    return {
        type: ADD_NEP5,
        hash: hashToAdd
    }
}

export function addHashBalance(hashscript, balance){
    return {
        type: ADD_HASH_BALANCE,
        payload: {
            [hashscript]: balance
        }
    }
}


// reducer for nep5 hash contracts. The initial state will include the hash script for Aphelion
export default (state = { nep5: initialNep5ReducerState , balances: {} }, action) => {
    switch (action.type) {
        case SET_NEP5:
            return {...state, nep5: action.nep5 };
        case ADD_NEP5:
            let newState = Object.assign({}, state, { nep5: [ ...state.nep5, action.hash ] });
            return newState;
        case ADD_HASH_BALANCE:
            let balanceState = Object.assign({}, state, { balances: { ...state.balances, ...action.payload }});
            return balanceState;
        default:
            return state;
    }
};
