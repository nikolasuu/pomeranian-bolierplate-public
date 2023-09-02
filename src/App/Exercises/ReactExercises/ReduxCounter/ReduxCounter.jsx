import './style.css';
import { First } from './First';
import { ReduxStealer } from './ReduxStealer';

export const ReduxCounter = () => {
  return (
    <div>
      <h1>Redux Conuter</h1>
      <div className="redux-container">
        <First />
        <ReduxStealer />
      </div>
    </div>
  );
};
