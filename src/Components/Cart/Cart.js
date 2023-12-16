import React, { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Cart.css';
import { List } from "antd";
import { ReactComponent as CartSVG } from '../../img/cart.svg';

export const Cart = () => {
    const orders = useSelector((state) => state.cart.list);
    const [showPortal, setShowPortal] = useState(false);

    useLayoutEffect(() => {
        if (orders.length > 0) {
            setShowPortal(true);
        }
    }, [orders]);

    const portalContent = (
        <div className="cart-portal" >
            <List
                header={<div className="cart-header"><CartSVG className="centered-icon" /></div>}
                bordered
                dataSource={orders}
                renderItem={(item) => (
                    <List.Item>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    );

    return createPortal(
        <TransitionGroup>
            {showPortal && (
                <CSSTransition in={showPortal} timeout={400} classNames="cart-portal">
                    {portalContent}
                </CSSTransition>
            )}
        </TransitionGroup>,
        document.getElementById('cart-root')
    );
};