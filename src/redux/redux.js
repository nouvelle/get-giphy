import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// initial STATE
const initialState = {
  bkImg: "",
  gifImg: ""
};

// ACTION
export const getBkImg = img => ({
  type: "GET_BK_IMG",
  img
});
export const getConvert = img => ({
  type: "GET_CONVERT",
  img
});

// ACTION CREATOR
export const getBkImgAsync = dispatch => {
  fetch("https://source.unsplash.com/random")
    .then(img => {
      const root = document.getElementById("root");
      root.style.backgroundImage = `url(${img.url})`;
      return dispatch(getBkImg(img.url));
    })
    .catch(err => {
      console.log(err);
    });
};

export const callAPIAsync = keyward => dispatch => {
  // const reqURL = `https://getvideo.p.rapidapi.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${keyward}`;
  const reqURL =
    "https://giphy.p.rapidapi.com/v1/gifs/search?limit=1&q=starbucks&api_key=dc6zaTOxFJmzC";
  fetch(reqURL, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "giphy.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY
    }
  })
    .then(response => {
      // return dispatch(getConvert(response));
      response.json().then(data => {
        console.log(data.data[0]);
        return dispatch(getConvert(data.data[0]));
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BK_IMG": {
      return Object.assign({}, state, { bkImg: action.img });
    }
    case "GET_CONVERT": {
      return Object.assign({}, state, { gifImg: action.img });
    }
    default:
      return state;
  }
};

// STORE
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
