import React, { useState } from 'react'
import { history } from '../redux'
import Head from './head'
import './styles/mainpage.scss'

const MainPage = () => {
  const InputField = () => {
    const [value, setValue] = useState('')
    const onChange = (e) => {
      setValue(e.target.value)
    }
    const getHistory = () => {
      history.push(`/${value}`)
    }
    return (
      <form className="ui-form">
        <div className="form-row">
          <input type="text" value={value} onChange={onChange} id="input-field" />
          <label htmlFor="Github Nickname">GitHub Nickname</label>
        </div>
        <p>
          <button type="submit" id="search-button" onClick={getHistory}>
            Search
          </button>
        </p>
      </form>
    )
  }
  return (
    <div>
      <Head title="Hello" />
      <div id="input-field" className="input">
        <InputField />
      </div>
    </div>
  )
}

MainPage.propTypes = {}

export default React.memo(MainPage)
