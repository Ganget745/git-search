import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Header from './header'

import './styles/chooserepository.scss'

const ReactMarkdown = require('react-markdown')

const ChooseRepository = () => {
  const { userName } = useParams()
  const { repositoryName } = useParams()
    const [chooserepo, setChooserepo] = useState()
    useEffect(() => {
      axios
        .get(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`)
        .then((it) => {
          setChooserepo(it.data)
        })
    }, [])
    return (
      <div className="repo-content">
        <div className="container">
          <div className="row justify-content-center text-center">

            <form className="cr-form">
              <div className="row">
                <Header />
              </div>
              <div className="col-12 pad_0">
                <div id="description" className="description">
                  <ReactMarkdown source={chooserepo} />
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    )

}

ChooseRepository.propTypes = {}

export default React.memo(ChooseRepository)
