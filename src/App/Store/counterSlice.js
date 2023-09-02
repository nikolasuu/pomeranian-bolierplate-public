import { createSlice } from '@reduxjs/toolkit';

const sliceName = 'counter-test';
const saveToLocalStorage = (state) => {
  localStorage.setItem(sliceName, JSON.stringify(state));
};

const getFromLocalStorage = () => {
  const valueFromStorage = localStorage.getItem(sliceName);
  //   localStorage.removeItem(sliceName);
  return JSON.parse(valueFromStorage);
};

const initailValue = 0;
const initialState = { value: initailValue, errorMessage: '' };

const getInitialState = () => {
  const storageValue = getFromLocalStorage();
  if (!storageValue) {
    return initialState;
  } else {
    return storageValue;
  }
};

export const counterSlice = createSlice({
  name: sliceName,
  initialState: getInitialState(),
  reducers: {
    increment: (state) => {
      state.value += 1;
      saveToLocalStorage(state);
    },
    incrementBy: (state, action) => {
      //   console.log(action);
      if (state.value + action.payload > 40) {
        state.errorMessage = 'Nie może być wieksza niż 40';
      } else {
        state.value += action.payload;
      }
      saveToLocalStorage(state);
    },
    decrement: (state, action) => {
      if (state.value - action.payload <= 0) {
        state.value = initailValue;
        state.errorMessage = 'Wartość nie może być mniejsza niż 0';
      } else {
        state.value -= action.payload;
      }
      saveToLocalStorage(state);
    },
    reset: (state) => {
      state = initailValue;
      saveToLocalStorage(state);
    },
    clearError: (state) => {
      state.errorMessage = '';
    },
  },
});

export const selectValue = (state) => state?.counterSlice?.value;
export const selectError = (state) => state?.counterSlice?.errorMessage;
export const { increment, incrementBy, decrement, reset, clearError } =
  counterSlice.actions;
