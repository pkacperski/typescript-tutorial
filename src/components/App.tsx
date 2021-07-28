import PrList from './pr-list';
import { Provider, teamsTheme } from '@fluentui/react-northstar';
import { ButtonsContainer } from './buttons-container';

const App = () => {
  return (
    <Provider theme={teamsTheme}>
      <PrList />
      <ButtonsContainer />
    </Provider>
  );
}

export default App;
