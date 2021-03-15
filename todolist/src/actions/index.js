import todoList from '../apis/todoList';
import { ADD_TASK, FETCH_TASKS, DELETE_TASK, EDIT_TASK } from './types';

export const addTask = (task) => async (dispatch) => {
  const response = await todoList.post('/tasks', task);

  dispatch({
    type: ADD_TASK,
    payload: response.data,
  });
};

export const fetchTasks = () => async (dispatch) => {
  const response = await todoList.get('/tasks');

  dispatch({
    type: FETCH_TASKS,
    payload: response.data,
  });
};

export const editTask = (updatedTask, id) => async (dispatch) => {
  const response = await todoList.put(`/tasks/${id}`, updatedTask);

  dispatch({
    type: EDIT_TASK,
    payload: response.data,
  });
};

export const deleteTask = (updatedTask, id) => async (dispatch) => {
  const response = await todoList.delete(`/tasks/${id}`, updatedTask);

  dispatch({
    type: DELETE_TASK,
    payload: response.data,
  });
};
