import PrList from './pr-list';
import { Provider, teamsTheme } from '@fluentui/react-northstar';
import { GetAllButton } from './get-all-button';
import { DeleteLastButton } from './delete-last-button';

const App = () => {
  return (
    <Provider theme={teamsTheme}>
      <PrList />
        <GetAllButton />
        <DeleteLastButton />
    </Provider>
  );
}

export default App;
