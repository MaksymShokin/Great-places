import {ADD_PLACES} from './places-action'
import Place from '../models/places';

const initialState = {
  places: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACES:
      const newPlace = new Place(
        new Date().toString(), action.placeData.title;
        return {
          places: state.places.concat(newPlace)
        }
      )
      break;
    default: return state
  }

}