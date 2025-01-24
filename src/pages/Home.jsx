import React, { useState } from 'react'
import Hero from '../components/Hero/Hero'
import Explore from '../components/Explore/Explore'
import Menu from '../components/Menu/Menu'

const Home = () => {

  const [category, setCategory] = useState("All")
  return (
    <div>
      <Hero/>
      <Explore category={category} setCategory={setCategory} />
      <Menu category={category}/>

    </div>
  )
}

export default Home