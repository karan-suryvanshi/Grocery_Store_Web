import React from 'react'
import {CategoryBar} from '../components/CategoryBar';
import {HeroSlider} from '../components/HeroSlider';
import FeaturedBanners from '../components/FeaturedBanners';
import PopularProducts from '../components/PopularProducts';
import Lifestyle from '../components/Lifestyle';
import SpecialOffers from '../components/SpecialOffer';

const HomePage = () => {
  return (
    <div className='home-grocery-page'>
      <CategoryBar/>
      <HeroSlider/>
      <FeaturedBanners/>
      <PopularProducts/>
      <Lifestyle/>
      <SpecialOffers/>
    </div>
  )
}

export default HomePage;
