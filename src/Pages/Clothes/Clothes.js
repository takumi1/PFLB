import React from 'react';
import {Navigation} from "../../Components/Navigation/Navigation";
import CategoryTable from '../../Components/Table/Table';
import {useSelector} from "react-redux";
import {Cart} from "../../Components/Cart/Cart";

export const Clothes = () => {
    const categoryList = useSelector(state => state.products.catalog);
    return (
        <>
            <Navigation />
            {categoryList && <CategoryTable categoryList={categoryList[1].products} />}
            <Cart/>
        </>
    );
};
