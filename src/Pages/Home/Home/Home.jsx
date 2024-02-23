import React from 'react';
import Hero from '../Hero/Hero';
import PopularFish from '../PopularFish/PopularFish';
import PopularSeller from './PopularSeller/PopularSeller';
import Email from './Email/Email';
import ViewReview from './ViewReview/ViewReview';
import FAQs from './FAQs/FAQs';

const Home = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <PopularFish></PopularFish>
            <ViewReview></ViewReview>
            <PopularSeller></PopularSeller>
            <Email></Email>
            <FAQs></FAQs>
        </div>
    );
};

export default Home;