import React from 'react'
import TransformationForm from './TransformationForm'

const Header = ({ title, subtitle}: {title: string, subtitle?: string}) => {
  return (
    <>
      <>
        <h2 className="h2-bold text-dark-600">{title}</h2>
        {subtitle && <p className="p-16-regular mt-4"> {subtitle} </p>}
      </>

      <TransformationForm/>
    </>

  )
}

export default Header
