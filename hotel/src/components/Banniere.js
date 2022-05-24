import React from 'react'

export default function Banniere({children,title,subtitle}) {
  return (
    <div className="banner">
        <h1>{title}</h1>
        <div></div>
        <p>{subtitle}</p>
        {children}
    </div>
  )
}
