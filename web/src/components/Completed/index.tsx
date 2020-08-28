import React from 'react';
import { Link } from 'react-router-dom';

import successCheckIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';

interface CompletedProps {
  title: string;
  subtitle: string;
  subtitleExtra?: string;
  buttonText: string;
}

const Completed: React.FC<CompletedProps> = ({
  title,
  subtitle,
  buttonText,
  subtitleExtra,
}) => {
  return (
    <div className="completed-container">
      <img src={successCheckIcon} alt="doneIcon" />
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
      {subtitleExtra && <h4>{subtitleExtra}</h4>}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button type="button">{buttonText}</button>
      </Link>
    </div>
  );
};

export default Completed;
