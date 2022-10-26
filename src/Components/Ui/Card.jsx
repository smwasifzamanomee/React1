import React from 'react'

const Card = ({item, className}) => {
    const {IconItem, title, description} = item
  return (
    <div className={`${className}`}>
        {/* <img src={image} alt=''/> */}
        <IconItem className='text-4xl text-primary'/>
        <div className="mt-3">
        <h2 className=" font-bold text-dark text-xl mb-3">{title}</h2>
        <p className=" text-text_inverted md:text-[15px] text-[14px] ">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Card