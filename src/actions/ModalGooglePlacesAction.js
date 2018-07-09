const SET_DATA = 'SET_DATA'
const CLEAR_DATA = 'CLEAR_DATA'

export { SET_DATA }

export function setData(value) {
    return {
      type: SET_DATA,
      inputValue: value
    }
}

export function clearData(value) {
    return {
      type: CLEAR_DATA
    }
}