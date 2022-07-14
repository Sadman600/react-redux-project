import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './counterSlice';
const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    
    return (
        <div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>incrementByAmount</button>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default Counter;