import React, { useMemo, useContext, useReducer, createContext } from 'react';
import { initialState } from './initialState';
import { counterReducer } from './reducers';

const CounterStateContext = createContext();
const CounterDispatchContext = createContext();

export const CounterProvider = (props) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterStateContext.Provider value={{ state }}>
      <CounterDispatchContext.Provider value={{ dispatch }}>
        {props.children}
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
};

export const useCounterDispatch = () => {
  return useContext(CounterDispatchContext);
};

export const useCounterState = () => {
  return useContext(CounterStateContext);
};
