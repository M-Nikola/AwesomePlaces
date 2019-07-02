import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';
import Image from '../../Assets/beautiful-place.jpg';

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE: 
            return {
                ...state,
                places: state.places.concat({ 
                    key: Math.random(), 
                    placeName: action.placeName, 
                    placeImage: Image
                })
            };
        case DELETE_PLACE: 
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.key;
                })
            };
        default:
            return state;
    }
};

export default reducer;