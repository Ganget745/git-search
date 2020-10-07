import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Header = () => {
  const { userName, repositoryName } = useParams()
  return (
    <div className="App-header">
      <div id="repository-name">User: {userName}</div>
      <Link to="/" id="go-back">
        Go Back
      </Link>
      {repositoryName && (
        <Link to={`/${userName}`} id="go-repository-list">
          Back to repository list
        </Link>
      )}
    </div>
  )
}

export default Header
