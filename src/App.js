import React from 'react';

import { CounterProvider } from './stateManagement/context';
import ComponentA from './componentA';
import ComponentB from './componentB';

export default function App() {
  return (
    <div className="App">
      <CounterProvider>
        <ComponentB />
        <ComponentA />
      </CounterProvider>
    </div>
  );
}
