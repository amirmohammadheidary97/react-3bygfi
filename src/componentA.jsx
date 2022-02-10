import React from 'react';
import * as actions from './stateManagement/actions';
import { useCounterDispatch } from './stateManagement/context';

const ComponentA = (props) => {
  const { dispatch } = useCounterDispatch();
  return (
    <div className="m-0 p-0">
      <button
        onClick={() => {
          dispatch({ type: actions.INCREMENT });
        }}
        className=" btn btn-sm btn-primary ms-2"
      >
        {' '}
        increment{' '}
      </button>

      <button
        onClick={() => {
          dispatch({ type: actions.DECREMENT });
        }}
        className=" btn btn-sm btn-primary ms-2"
      >
        {' '}
        decrement{' '}
      </button>

      <button
        onClick={() => {
          dispatch({ type: actions.RESET });
        }}
        className=" btn btn-sm btn-primary ms-2"
      >
        {' '}
        reset{' '}
      </button>
    </div>
  );
};

export default ComponentA;
