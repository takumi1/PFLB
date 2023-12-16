import React from 'react';
import {Navigation} from "../../Components/Navigation/Navigation";
import {useSelector} from "react-redux";
import CategoryTable from "../../Components/Table/Table";
import {Cart} from "../../Components/Cart/Cart";

export const Food = () => {
    const categoryList = useSelector(state => state.products.catalog);
    return (
        <>
            <Navigation />
            {categoryList && <CategoryTable categoryList={categoryList[0].products} />}
            <Cart/>
        </>
    );
};
