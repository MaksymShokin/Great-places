const ADD_PLACES = 'ADD_PLACES';

export const addPlace = (title) => {
  return {
    type: ADD_PLACES,
    placeData: {
      title: title
    }
  }
}