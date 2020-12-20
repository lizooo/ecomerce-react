import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { remove, increment, decrement } from '../../../store/actions';
import { useSelector } from 'react-redux';

export default function ShopPage() {

    const dispatch = useDispatch();
    const items = useSelector(state => state);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
      console.log(items)
        setTotalPrice(items.reduce((counter, item) =>
            (counter + item.price * item.counter), 0))
    }, [items])

    if (!items.length) { return <h1>Cart is Currently Empty!</h1> }
    return (
        <div>
            <h1>Shopping Cart</h1>
            {items.map(item =>
                <div key={item.id}>
                    <img img={item.img} height='160px' width='160px' />
                    <h1>{item.name}</h1>
                    <div onClick={() => (dispatch(increment(item)))}>+</div>
                    <h2>{item.counter}</h2>
                    <div onClick={() => (dispatch(decrement(item)))}>-</div>
                    <button onClick={() => (dispatch(remove(item)))}>Delete</button>
                    <h2>{item.price * item.counter}$</h2>
                </div>
            )}
            <h1>Total: {totalPrice}$</h1>
            {/* <NavButtonsContainer>
                <Link to='/catalog'>
                    <NavButton>Catalog</NavButton>
                </Link>
                <NavButton>Continue</NavButton>
            </NavButtonsContainer> */}
        </div>
    );
} 