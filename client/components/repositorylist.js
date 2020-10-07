import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Head from './head'
import './styles/repositorylist.scss'

const RepositoryList = () => {
  const { userName } = useParams()
  const UserRepo = () => {
    const [ueserrepo, setUserrepo] = useState([])

    useEffect(() => {
      axios.get(`https://api.github.com/users/${userName}/repos`).then((it) => {
        setUserrepo(it.data)
      })
    }, [])
    return (
      <form className="ui-form">
        <div className="form-row">
          {ueserrepo.map((it) => (
            <Link key={it.full_name} to={`/${it.full_name}`}>
              <p>{it.full_name}</p>
            </Link>
          ))}
        </div>
      </form>
    )
  }
  return (
    <div>
      <Head title="Hello" />
      <div className="repo-list">
        <UserRepo />
      </div>
    </div>
  )
}

RepositoryList.propTypes = {}

export default React.memo(RepositoryList)
