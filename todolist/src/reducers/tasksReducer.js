import {
  ADD_TASK,
  FETCH_TASKS,
  DELETE_TASK,
  EDIT_TASK,
} from '../actions/types';

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    case FETCH_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default tasksReducer;
