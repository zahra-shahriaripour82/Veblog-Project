import { useQuery } from '@apollo/client/react'
import React from 'react'
import { GET_AUTHORS_INFO } from '../../graphql/queries'

function Authors() {
  const {data,loading,error}=useQuery(GET_AUTHORS_INFO)

  if (loading) return <h>loading</h>
if(error) return <h1>Error</h1>

console.log(data)
  return (
    <div>Authors</div>
  )
}

export default Authors