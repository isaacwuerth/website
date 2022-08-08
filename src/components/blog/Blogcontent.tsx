import React from 'react'
import { useParams } from 'react-router-dom'

function Blogcontent() {
  const param = useParams()
  return <div className='blogcontent'>Blogcontent of {param.postid}</div>
}

export default Blogcontent
