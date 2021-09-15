import React from "react";
import { atom, selector } from "recoil";

export const CounterState = atom({
    key: 'CounterState',
    default: 0
});

export const CounterSelector = selector({
    key: 'CounterSelector',
    get: ({get}) => {
        const count = get(CounterState)
        return count % 2 ? '홀' : '짝';
    }
})