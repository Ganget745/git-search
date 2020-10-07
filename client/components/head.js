import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Head = () => {
  const { userName } = useParams()
  return (
    <div>
      <form className="ui-form">
        <div className="form-row">
          <header>
            <div className="git-user-name" id="repository-name">
              User: {userName}
            </div>
            <Link id="go-back" to="/">
              <button type="button">Go Back</button>
            </Link>
          </header>
        </div>
      </form>
    </div>
  )
}

Head.propTypes = {}

Head.defaultProps = {
  title: 'skillcrucial.com'
}

export default Head
