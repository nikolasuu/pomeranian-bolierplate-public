import { useDispatch, useSelector } from 'react-redux';
import { selectProfile, toggleProfile } from '../../../Store/storeTest';
import './style.css';
import { incrementBy } from '../../../Store/counterSlice';

export const CardDetails = () => {
  const profile = useSelector(selectProfile);
  return (
    <div>
      CardDetails
      {profile === 'business' && <div>Company Logo</div>}
    </div>
  );
};

export const Accounts = () => {
  const profile = useSelector((state) => {
    // console.log(state);
    return state?.testSlice?.userProfile?.profile;
  });
  const dispatch = useDispatch();
  return (
    <div>
      Accounts
      <div>Current profile: {profile}</div>
      <button onClick={() => dispatch(toggleProfile())}>Change profile</button>
    </div>
  );
};

export const Cards = () => {
  const dispatch = useDispatch();
  return (
    <div>
      Cards <CardDetails />
      <button onClick={() => dispatch(incrementBy(20))}>Add 20</button>
    </div>
  );
};

export const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Accounts />
      <Cards />
    </div>
  );
};

export const ReduxTest = () => {
  // business, retail
  return (
    <div className="test-redux">
      Main Page
      <Dashboard />
    </div>
  );
};
