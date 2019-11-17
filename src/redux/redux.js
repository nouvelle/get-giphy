import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// initial STATE
const initialState = {
  bkImg: "",
  gifImg: {
    url: "",
    title: "",
    source: ""
  }
};

// ACTION
export const getBkImg = img => ({
  type: "GET_BK_IMG",
  img
});
export const getConvert = imgData => ({
  type: "GET_CONVERT",
  url: imgData.images.downsized.url,
  title: imgData.title,
  source: imgData.source
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
  const reqURL = `https://giphy.p.rapidapi.com/v1/gifs/search?limit=1&q=${keyward}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;
  console.log(reqURL);
  fetch(reqURL, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "giphy.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY
    }
  })
    .then(response => {
      response.json().then(data => {
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
      console.log("img", action);
      return Object.assign({}, state, {
        gifImg: {
          url: action.url,
          title: action.title,
          source: action.source
        }
      });
    }
    default:
      return state;
  }
};

// STORE
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
