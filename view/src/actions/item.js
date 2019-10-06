import {
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAIL,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAIL,
  LOADING_ITEM
} from './types';
import {
  getWeeklyExpense,
  getMonthlyExpense,
  getYearlyExpense
} from './expense';
import { setAlert } from './alert';
import axios from 'axios';
const base_url = '';
// const base_url = 'http://localhost:3500';
export const getItems = (startDate, endDate, userId) => async dispatch => {
  dispatch({
    type: LOADING_ITEM
  });
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    startDate,
    endDate
  });
  try {
    const response = await axios.post(
      base_url + `/api/users/${userId}/allItems`,
      body,
      config
    );
    if (response.data.success) {
      dispatch({
        type: GET_ITEMS_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch(setAlert(response.data.message, 'danger'));
      dispatch({
        type: GET_ITEMS_FAIL,
        payload:response.data.message
      });
    }
  } catch (error) {
    dispatch({
      type: GET_ITEMS_FAIL,
      payload: error.toString()
    });
  }
};

export const addItem = (
  name,
  description,
  quantity,
  amount,
  date,
  userId
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    name,
    description,
    quantity,
    amount,
    date
  });
  try {
    const response = await axios.post(
      base_url + `/api/users/${userId}/items`,
      body,
      config
    );
    if (response.data.success) {
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: response.data
      });
      dispatch(setAlert('A new Item was added successfully', 'success'));
      dispatch(getWeeklyExpense(userId));
      dispatch(getMonthlyExpense(userId));
      dispatch(getYearlyExpense(userId));
    } else {
      dispatch(setAlert(response.data.message, 'danger'));
    }
  } catch (error) {
    dispatch(setAlert(error.toString(), 'danger'));

    dispatch({
      type: ADD_ITEM_FAIL,
      payload: error.toString()
    });
  }
};
