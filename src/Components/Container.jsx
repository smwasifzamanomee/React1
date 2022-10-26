import React from 'react'

const Container = ({bgColor, height, children, className}) => {
  return (
    <section className={`w-full ${height} ${bgColor} ${className}`}>
        <article className='container mx-auto px-6 py-12'>
        {children}
        </article>
    </section>
  )
}

export default Container