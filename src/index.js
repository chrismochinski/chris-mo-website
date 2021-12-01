import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

// single reducer for sound state 
// true = muted, false = sound on
const soundState = (state = true, action) => {
  if(action.type === "SOUND_SETTING") {
    return !action.payload;
  }
}

const storeInstance = createStore(
  soundState
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

