import { Link } from 'react-router-dom';
import fileIcon from '../../Images/fileIcon.svg';
import { blockRouterMetaData } from './view-router-data';

export const ExerciseLinks = () => {
  return (
    <ul>
      {blockRouterMetaData.map((blockMetaData) => (
        <li key={blockMetaData.path}>
          <img src={fileIcon} alt="file icon" />
          <Link to={blockMetaData.path}>
            <div>
              <p>{blockMetaData.linkLabel}</p>
              <div className="exercise-link-desc">
                <span>{blockMetaData.date}</span>
                <span className="exercise-link-desc-tags">
                  {blockMetaData.tags.map((e) => '#' + e + ' ')}
                </span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
