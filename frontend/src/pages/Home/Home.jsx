import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import AppDownload from '../../component/AppDownload/AppDownload'
import NewsLetter from '../../component/NewsLetter/NewsLetter'
import BottomBanner from '../../component/BottomBanner/BottomBanner'
const Home = () => {

    const [category,setCategory] = useState("All");


  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <BottomBanner/>
      <NewsLetter/>
      <AppDownload/>
    </div>
  )
}

export default Home
