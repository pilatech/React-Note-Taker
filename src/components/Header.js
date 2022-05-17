import React from 'react'
import { GrAdd } from 'react-icons/gr'

export default function Header() {
  return (
    <header className="main-header">
      <h2 className="main-header__logo">Notr</h2>
      <button className="main-header__add-btn">
      <GrAdd/>
      </button>
    </header>
  )
}
