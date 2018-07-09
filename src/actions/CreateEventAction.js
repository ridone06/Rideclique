const SET_EVENT_NAME = 'SET_EVENT_NAME'
const SET_DATE_EVENT = 'SET_DATE_EVENT'
const SET_VENUE_EVENT = 'SET_VENUE_EVENT'

export { SET_EVENT_NAME, SET_DATE_EVENT, SET_VENUE_EVENT }

export function setEventName(value) {
    return {
      type: SET_EVENT_NAME,
      inputValue: value
    }
}

export function setDateEvent(value) {
    return {
      type: SET_DATE_EVENT,
      inputValue: value
    }
}

export function setVenueEvent(value) {
    return {
      type: SET_VENUE_EVENT,
      inputValue: value
    }
}