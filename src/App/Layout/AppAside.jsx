import { NavLink } from 'react-router-dom';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { BookIcon } from '../Components/Icons/BookIcon';
import { FaqIcon } from '../Components/Icons/FaqIcon';

import './styles/aside.css';

export function AppAside({ visible, handleVisible }) {
  return (
    <aside className={visible ? 'aside-visible' : ''}>
      <nav>
        <ul>
          <li>
            <NavLink to="dashboard" onClick={handleVisible}>
              <HouseIcon className="icon" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="cv" onClick={handleVisible}>
              <PersonalCardIcon className="icon" /> Moje CV
            </NavLink>
          </li>
          <li>
            <NavLink to="exercises" onClick={handleVisible}>
              <EditIcon className="icon" /> Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink to="blocks" onClick={handleVisible}>
              <ElementIcon className="icon" /> Bloki
            </NavLink>
          </li>
          <li>
            <NavLink to="calendar" onClick={handleVisible}>
              <CalendarIcon className="icon" /> Kalendarz
            </NavLink>
          </li>
          <li>
            <NavLink to="blog" onClick={handleVisible}>
              <BookIcon className="icon" /> Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="faq" onClick={handleVisible}>
              <FaqIcon className="icon" /> FAQ
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
