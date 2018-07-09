import { SET_EVENT_NAME, SET_DATE_EVENT, SET_VENUE_EVENT } from '../actions/CreateEventAction'

const initialState = {
    eventName: '',
    dateEvent: '',
    venueEvent: ''
}

export default function(state = initialState, action){
    switch (action.type) {
        case SET_EVENT_NAME:
          return {
            ...state,
            eventName: action.inputValue
          }
        case SET_DATE_EVENT:
          return {
            ...state,
            dateEvent: action.inputValue
          }
        case SET_VENUE_EVENT:
          return {
            ...state,
            venueEvent: action.inputValue
          }
        default:
          return state
    }
}