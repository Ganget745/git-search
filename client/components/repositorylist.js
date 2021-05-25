import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './header'

import 'bootstrap-4-grid'
import './styles/repositorylist.scss'

const RepositoryList = () => {
  const { userName } = useParams()
    const [ueserrepo, setUserrepo] = useState([])

    useEffect(() => {
      axios.get(`https://api.github.com/users/${userName}/repos`).then((it) => {
        setUserrepo(it.data)
      })
    }, [])
    return (
      <div className="repo-form">
        <div className="container">
          <div className="row justify-content-center text-center">

            <form className="list-form">
              <div className="row">
                <Header />
              </div>
              <div className="col-12">
                <div className="form-row">
                  {ueserrepo.map((it) => (
                    <Link key={it.full_name} to={`/${it.full_name}`} className="list-item">
                      <p>{it.full_name}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>

    )
  }

RepositoryList.propTypes = {}

export default React.memo(RepositoryList)
