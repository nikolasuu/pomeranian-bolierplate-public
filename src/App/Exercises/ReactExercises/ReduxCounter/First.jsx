import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  incrementBy,
  selectValue,
} from '../../../Store/counterSlice';
export const First = () => {
  // value
  // counterSlice
  // increment
  const value = useSelector(selectValue);
  const dispatch = useDispatch();
  return (
    <div className="redux-component">
      <h2>First Component</h2>
      <div className="redux-output">{value}</div>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(incrementBy(5))}>+5</button>
      <button onClick={() => dispatch(incrementBy(10))}>+10</button>
    </div>
  );
};
