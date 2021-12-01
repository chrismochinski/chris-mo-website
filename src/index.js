import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

// single reducer for sound state 
// true = muted, false = sound on
const soundState = (state = true, action) => {
  if(action.type === "SOUND_SETTING") {
    return {...state, soundSetting: !action.payload};
  }
  return state;
}

const setSelectedPage = (state = "", action) => {
  console.log('selected page reducer:', action.payload)
  if(action.type === "SET_SELECTED_PAGE") {
    return {...state, selectedPage: action.payload}
  }
  return state;
}

const storeInstance = createStore(
  combineReducers(
    {    soundState,
      setSelectedPage,
  },
  )
  
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

