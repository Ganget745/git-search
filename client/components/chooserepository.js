import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './header'
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
        <div id="description" className="result">
          <ReactMarkdown source={chooserepo} />
        </div>
      </form>
    )
  }
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <Header title="Hello" />
        <ChooseRepo />
      </div>
    </div>
  )
}

ChooseRepository.propTypes = {}

export default React.memo(ChooseRepository)
