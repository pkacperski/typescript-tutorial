import * as React from 'react';
import PrList from './pr-list';
import {Provider, teamsTheme} from '@fluentui/react-northstar';

const App = () => {
  return (
    <Provider theme={teamsTheme}>
      <PrList />
    </Provider>
  );
}

export default App;
