import React from 'react';
import { NavLink } from 'react-router-dom';
import './categories.css';
import { HtmlSVG } from '../Images/tech-stack/HtmlSVG.jsx';
import { JsSVG } from '../Images/tech-stack/JsSVG';
import { ReactSVG } from '../Images/tech-stack/ReactSVG';
import { FirebaseSVG } from '../Images/tech-stack/FirebaseSVG';
import { WebApiSVG } from '../Images/tech-stack/WebApiSVG';

export const Categories = () => {
  return (
    <>
      <div className="exercises-categories">
        <h2>Kategorie</h2>

        <NavLink to="html-css">
          <HtmlSVG />
          <p>HTML & CSS</p>
        </NavLink>
        <NavLink to="js">
          <JsSVG />
          <p>JavaScript</p>
        </NavLink>
        <NavLink to="react">
          <ReactSVG />
          <p>React</p>
        </NavLink>
        <NavLink to="web-api">
          <WebApiSVG />
          <p>
            Web API <sup>*</sup>
          </p>
        </NavLink>
        {/* <NavLink to="async">Asynchroniczność</NavLink> */}
        <NavLink to="firebase">
          <FirebaseSVG />
          <p>
            Firebase <sup>*</sup>
          </p>
        </NavLink>
      </div>
    </>
  );
};
