import React from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { CounterState, CounterSelector } from '../atom/testAtom'

import Counter2 from './Counter2';



const Counter = () => {

    const [getCount, setCount] = useRecoilState(CounterState);
    const CountSelector = useRecoilValue(CounterSelector);

    return (
        <div>
            Counter : {getCount} / {CountSelector}
            <br />
            <button onClick={() => setCount(getCount - 1)}>감소</button>
            <button onClick={() => setCount(getCount + 1)}>증가</button>
            <Counter2></Counter2>
        </div>
    )
}

export default Counter;