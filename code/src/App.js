import React, { useState, useEffect } from 'react'
import { Thoughts } from './Thoughts'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com/')
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])
  return (
    <main>
      <div>
        <Thoughts thoughts={thoughts} />
      </div>
    </main>

  )
}