import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { userName } = useParams()
  return (
    <div>
      <div className="cr-row">
        <header>
          <div className="cr-user-name" id="repository-name">
            User:{userName}
          </div>
          <Link id="go-back" to="/">
            Go Back
          </Link>
          <Link id="go-repository-list" to={`/${userName}`}>
            Go To Repository List
          </Link>
        </header>
      </div>
    </div>
  )
}

Header.propTypes = {}

Header.defaultProps = {
  title: 'skillcrucial.com'
}

export default Header
