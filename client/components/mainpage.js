import React, { useState } from 'react'
import { history } from '../redux'

import 'bootstrap-4-grid'

import './styles/mainpage.scss'

const MainPage = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const getHistory = () => {
    history.push(`/${value}`)
  }
  return (
    <div className="search-form">
      <div className="container">
        <div className="row justify-content-center text-center">

          <form className="input-form">
              <div className="col-12 pad_0">
                <div className="input-box">
                  <div className="form-header">
                    <p>Github Nickname:</p>
                  </div>
                  <input type="text" value={value} onChange={onChange} id="input-field" />
                </div>
              </div>
              <button className="search-button" type="submit" id="search-button" onClick={getHistory}>
                Search
              </button>
          </form>

        </div>
      </div>
    </div>
  )
}

MainPage.propTypes = {}

export default React.memo(MainPage)
