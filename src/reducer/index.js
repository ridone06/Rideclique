import { combineReducers } from 'redux';
import CreateEventReducer from './CreateEventReducer';
import ModalGooglePlacesReducer from './ModalGooglePlacesReducer';

export default combineReducers({
    createEvent: CreateEventReducer,
    ModalGooglePlaces: ModalGooglePlacesReducer
});