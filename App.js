import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import PlacesNavigator from './navigation/PlacesNavigator';
import PlacesReducer from './store/places-reducer';
import {init} from './helpers/db';

init().then(()=> {
  console.log('db success')
}).catch(error => {
  console.log('db fail');
  console.log(error)
});

const rootReducer = combineReducers({
  places: PlacesReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator/>
    </Provider>

  );
}
