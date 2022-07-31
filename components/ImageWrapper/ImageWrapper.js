import React from 'react'
import Image from 'next/image'
const ImageWrapper = ({imageURL , altText}) => {
  return (
    <div>
        <Image src={imageURL} layout='fill' alt={altText} />
    </div>
  )
}

export default ImageWrapper