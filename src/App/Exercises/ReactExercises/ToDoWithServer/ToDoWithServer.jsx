import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { ToDoForm } from './Features/ToDoForm';

import './style.css';

export function ToDoWithServer() {
  return (
    <div className="todo">
      <MasterHeader title="TODO" />
      <ToDoForm />
    </div>
  );
}
