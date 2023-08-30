import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './Component/Contact/Contact';
import AuthProvider from './Component/Context/AuthProvider';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register/Register';
import NotFound from './Component/NotFound/NotFound';
import Shop from './Component/Shop/Shop';
import OrderReview from './Component/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/orderReview">
              <OrderReview></OrderReview>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
