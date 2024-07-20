import MainPage from './components/MainPage';
import SuccessPage from './components/SuccessPage';
import OrderPage from './components/OrderPage';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import "./components/MainPage.css";
import "./components/Footer.css";
import Footer from "./components/Footer";
import "./components/OrderPage.css";
import "./components/SuccessPage.css";
import Header from './components/Header';
import "./components/Header.css";



function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/orderpage" component={OrderPage} />
        <Route path="/successpage" component={SuccessPage} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
