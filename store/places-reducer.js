import { ADD_PLACE, SET_PLACES } from './places-actions'
import Place from '../models/places';

const initialState = {
  places: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(
        action.placeData.id.toString(),
        action.placeData.title,
        action.placeData.imageUri
      );

      return {
        places: state.places.concat(newPlace)
      };
      break;
    case SET_PLACES:
      return {
        places: action.places.map(place => new Place(place.id.toString(), place.title, place.imageUri))
      }
    default:
      return state
  }

}