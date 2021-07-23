import * as React from 'react';
import PrList from './PrList';
import {Provider, teamsTheme} from '@fluentui/react-northstar';

const App = () => {
  return (
    <Provider theme={teamsTheme}>
      <PrList />
      {/* <RemoveButton onClick={removeItemCallback} /> */}
    </Provider>
  );
}

export default App;
