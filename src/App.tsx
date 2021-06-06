import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

const HatsPage = () => {
  return <div>HATS PAGE</div>;
};

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </>
  );
}

export default App;
