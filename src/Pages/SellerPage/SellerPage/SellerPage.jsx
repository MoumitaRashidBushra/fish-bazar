import React, { useContext } from 'react';
import ShowSeller from './ShowSeller/ShowSeller';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import SellerHero from './SellerHero/SellerHero';
import SellerPageContent from './SellerPageContent/SellerPageContent';

const SellerPage = () => {




    return (
        <div>
            <SellerHero></SellerHero>
            <SellerPageContent></SellerPageContent>

        </div>
    );
};

export default SellerPage;