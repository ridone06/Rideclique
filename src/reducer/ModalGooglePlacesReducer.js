import { SET_DATA, CLEAR_DATA } from '../actions/ModalGooglePlacesAction'

const initialState = {
    inputValue: '',
}

export default function(state = initialState, action){
    switch (action.type) {
        case SET_DATA:
          return {
            ...state,
            inputValue: action.inputValue
          }
        case CLEAR_DATA:
          return {
            ...state,
            inputValue: ''
          }
        default:
          return state
    }
}