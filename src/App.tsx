import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import SignInAndSignUpPage from './pages/SignInAnSignUpPage/SignInAndSignUpPage';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </>
  );
}

export default App;
