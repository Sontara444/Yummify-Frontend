import React, { useState } from 'react'
import Hero from '../components/Hero/Hero'
import Explore from '../components/Explore/Explore'
import MenuList from '../components/MenuList/MenuList'

const Home = () => {

  const [category, setCategory] = useState("All")
  return (
    <div>
      <Hero/>
      <Explore category={category} setCategory={setCategory} />
      <MenuList category={category}/>

    </div>
  )
}

export default Home