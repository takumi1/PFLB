import React from 'react';
import { Table } from 'antd';
import { Button } from 'antd';
import {useDispatch} from "react-redux";
import {add} from "../../store/buyerCartSlice";

const handleBuyClick = (dispatch, record) => {
    const { name } = record;
    dispatch(add(name))
};

const CategoryTable = ({ categoryList }) => {
    const dispatch = useDispatch();
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 500,
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            sorter: (a, b) => a.quantity - b.quantity,
        },
        {
            title: 'Availability',
            dataIndex: 'availability',
            key: 'availability',
            render: (availability) => {
                return availability ? 'В наличии' : 'Отсутствует';
            },
            filters: [
                { text: 'В наличии', value: true },
                { text: 'Отсутствует', value: false },
            ],
            onFilter: (value, record) => record.availability === value,
        },
        {
            title: '',
            key: 'buy',
            render: (text, record) => {
                return (
                    <Button onClick={() => handleBuyClick(dispatch, record)}>Buy</Button>
                );
            },
        },
    ];

    return (
        <Table
            dataSource={categoryList}
            columns={columns}
            rowKey={(record) => categoryList.indexOf(record)}
        />
    );
};

export default CategoryTable;