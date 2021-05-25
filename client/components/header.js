/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { useParams, Link } from 'react-router-dom';

import 'bootstrap-4-grid'
import './styles/header.scss'

const Header = () => {
  const { userName, repositoryName } = useParams()
  return (
    <div className="col-12 pad_0">
      <div className="header">
        <div id="repository-name">USER: {userName}</div>
        <div className="row">
          <div className="col-6 pad_0">
            <Link to="/" id="go-back">
              Go Back
            </Link>
          </div>
          {repositoryName && (
            <div className="col-6">
              <Link to={`/`} id="go-repository-list">
                Back to repository list
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
