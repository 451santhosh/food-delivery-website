import React, { useState } from 'react'
import './home.css'
import Header from '../components/Header/Header'
import Exploremenu from '../exploremenu/exploremenu'
import FoodDisplay from '../FoodDisplay/FoodDisplay'
import AppDownload from '../components/AppDownload/AppDownload'
const Home = () => {
  let[category,setCategory]=useState("All");



  return (
    <div>
      <Header/>
      
      <Exploremenu category={category} setCategory={setCategory}></Exploremenu>
      <FoodDisplay category={category}></FoodDisplay>
      <AppDownload></AppDownload>
    </div>
  )
}

export default Home
