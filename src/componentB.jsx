import React from 'react';
import { useCounterState } from './stateManagement/context';

const ComponentA = (props) => {
  const { state } = useCounterState();
  return <div className="m-0 p-2 fw-bold fs-5">{state.count}</div>;
};

export default ComponentA;
