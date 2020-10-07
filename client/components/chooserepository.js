import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Head from './head'
import './styles/chooserepository.scss'

const ReactMarkdown = require('react-markdown')

const ChooseRepository = () => {
  const { userName } = useParams()
  const { repositoryName } = useParams()
  const ChooseRepo = () => {
    const [chooserepo, setChooserepo] = useState()
    useEffect(() => {
      axios
        .get(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`)
        .then((it) => {
          setChooserepo(it.data)
        })
    }, [])
    return (
      <form className="cr-form">
        <div className="cr-row">
          <header>
            <div className="cr-user-name" id="repository-name">
              User:{userName}
            </div>
            <Link id="go-back" to="/">
              <button type="button">Go Back</button>
            </Link>
            <Link id="go-repository-list" to={`/${userName}`}>
              <button type="button">Go To Repository List</button>
            </Link>
          </header>
        </div>
        <div id="description" className="result">
          <ReactMarkdown source={chooserepo} />
        </div>
      </form>
    )
  }
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <ChooseRepo />
      </div>
    </div>
  )
}

ChooseRepository.propTypes = {}

export default React.memo(ChooseRepository)
