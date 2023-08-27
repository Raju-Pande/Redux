const redux = require("redux");

const ADD_TODO = "Add TODO";
const TOGGLE_TODO = "Toggle TODO";

// ACTION CREATORS

const addToDo = (text) => ({ text, type: ADD_TODO });
const toggleToDo = (index) => ({ index, type: TOGGLE_TODO });

// Initial State

const initialState = {
  todo: [],
};

// Reducers

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
    case TOGGLE_TODO:
    default:
      return state;
  }
}
