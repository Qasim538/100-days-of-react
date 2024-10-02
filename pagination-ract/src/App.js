import React from 'react'
import DataAPI from './Components/DataAPI'
import Pagination from './Components/Pagination'

const App = ({ posts, postsPerPage }) => {
  return (
    <div>
      <DataAPI />
    </div>
  )
}

export default App
