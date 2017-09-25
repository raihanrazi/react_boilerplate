import React from 'react';
import { render } from 'react-dom';

import  App from './containers/App';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import { createStore, applyMiddleware, combineReducers } from 'redux';

const initialState = {
  items: [
    {
      itemName: "House",
      itemCost: 350000,
    },
    {
      itemName: "Car",
      itemCost: 25000,
    },
    {
      itemName: "Boat",
      itemCost: 50000,
    },
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_COST":
      var newData = state.items.map(dat => {
                  if(dat.itemName == 'Boat')
                     return Object.assign({}, dat, {itemCost:action.payload})
                  return dat
              });

      state = {
        ...state,
        items: newData
      };
      break;
    case "UPDATE_NAME":
    var newData = state.items.map(dat => {
                if(dat.itemName == 'Boat')
                   return Object.assign({}, dat, {itemName:action.payload})
                return dat
            });

    state = {
      ...state,
      items: newData
    };
    break;
  }
  return state;
};


const store = createStore(combineReducers({reducer}), applyMiddleware(createLogger()));

render(
  <Provider store={store}>
    <App />
  </Provider>
  , window.document.getElementById("app"));




// store.dispatch({
//   type: "UPDATE_PRICE",
//   payload: 2000
// })
//
// store.dispatch({
//   type: "UPDATE_NAME",
//   payload: "Samsung S9"
// })
