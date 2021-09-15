import React from 'react'
import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CounterState } from '../atom/testAtom'


const Counter = () => {

  const value = useRecoilValue(CounterState);
  const setter = useSetRecoilState(CounterState);

    return (
        <div>
            Counter : {value}
            <br/>
            <button onClick={()=> setter(value - 1)}>감소</button>
            <button onClick={()=> setter(value + 1)}>증가</button>
        </div>
    )
}

export default Counter;