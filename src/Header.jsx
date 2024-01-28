import React from 'react'

function Header(Props) {
  return (
    <div>
      <img width="100%" src={`./images/${Props.value[0]}`} />
    </div>
  )
}

export default Header

