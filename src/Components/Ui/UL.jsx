import React from 'react'

const UL = ({heading, items}) => {
  return (
    <div>
        <h4 className='text-primary'>{heading}</h4>
        <ul className='my-6 text-text_inverted'>
            {items.map(item => <li
            className='my-3 hover:underline hover:text-primary transition-all cursor-pointer '
             key={item.id}>{item.name}</li>)}
        </ul>

    </div>
  )
}

export default UL