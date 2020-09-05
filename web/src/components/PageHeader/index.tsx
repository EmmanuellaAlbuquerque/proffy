import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
  title?: string;
  description?: string;
  topBarText?: string;
  className?: string;
  pageHeight?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className={'page-header ' + props.pageHeight}>
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        {props.topBarText && props.topBarText}
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="back">
        <div className={'header-content ' + props.className}>
          {props.title && <strong>{props.title}</strong>}
          {props.description && <p>{props.description}</p>}
          {props.children}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
