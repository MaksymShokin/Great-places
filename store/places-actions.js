import * as FileSystem from 'expo-file-system';
import { insertPlace } from '../helpers/db';

export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (title, image) => {
  return async dispatch => {
    const fileName = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath
      });
      const dbResult = await insertPlace(title, newPath, 'Dummy Address', 15.6, 12.5);
      console.log(dbResult)
    } catch (err) {
      console.log(err);
      throw err;
    }

    dispatch({type: ADD_PLACE, placeData: {id: 5, title: title, imageUri: newPath}});
  };
};