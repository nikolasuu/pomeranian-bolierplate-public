import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  reset,
  selectError,
  clearError,
} from '../../../Store/counterSlice';
import { useEffect } from 'react';

export const ReduxStealer = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearError());
    }, 2000);
  }, [dispatch, error]);

  return (
    <div className="redux-component">
      <h2>ReduxStealer Component</h2>
      <button onClick={() => dispatch(decrement(1))}>-1</button>
      <button onClick={() => dispatch(decrement(7))}>-7</button>
      <button onClick={() => dispatch(decrement(14))}>-14</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <p>{error}</p>
    </div>
  );
};
