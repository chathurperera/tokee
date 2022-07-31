import React, { useEffect } from 'react'

const Loading = () => {
  useEffect(() => {
    console.log('useEffect ran in Loader')
  },[])
  return (
    <div>Loading</div>
  )
}

export default Loading