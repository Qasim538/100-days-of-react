import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const details = () => {
  const { slug } = useParams()
  const [detail, setDetail] = useState()
  return (
    <div>
      Details
    </div>
  )
}

export default details
