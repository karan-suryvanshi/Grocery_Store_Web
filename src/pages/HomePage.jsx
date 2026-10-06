import React from 'react'
import {CategoryBar} from '../components/CategoryBar';
import {HeroSlider} from '../components/HeroSlider';
import FeaturedBanners from '../components/FeaturedBanners';
import PopularProducts from '../components/PopularProducts';

const HomePage = () => {
  return (
    <div className='home-grocery-page'>
      <CategoryBar/>
      <HeroSlider/>
      <FeaturedBanners/>
      <PopularProducts/>
    </div>
  )
}

export default HomePage;
