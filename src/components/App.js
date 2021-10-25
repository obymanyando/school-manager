import React, { useContext } from 'react';
import { AnimatedSwitch } from 'react-router-transition';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import MainPage from './pages/main-page/MainPage';
import About from './pages/about/About';
import Workshop from "./pages/workshop/Workshop";
import BlogList from "./pages/blog/BlogList";
import Contact from './pages/contact/Contact'
import GroupWork from './pages/group-work/GroupWork';
import HRMaterial from './pages/material/HRMaterial';
import WorkshopDetail from "./pages/workshop/WorkshopDetail";
import BlogDetail from "./pages/blog/BlogDetail";
import GroupWorkDetails from "./pages/group-work/GroupWorkDetail";
import Login from './shared-components/Login';
import SignUp from './shared-components/SignUp';
import ResetPass from './shared-components/ResetPass';
import ScrollToTop from "./shared-components/ScrollToTop";
import Header from '../components/shared-components/Header';
import FullSpinner from './shared-components/FullSpinner';

import '../assets/styles/App.css';

function App() {
  let { isLoggedIn, isFirstLoad, setFirstLoad } = useContext(AuthContext);
  if (isFirstLoad === false) {
    setTimeout(() => {
      setFirstLoad(true)
    }, 1500);
  }

  if (isFirstLoad === false) {
    return (
    <div className="App">
      <FullSpinner />
    </div>
    )
  } else if (isFirstLoad === true) {
    return (
      <div className="App">
        <Router>
          <ScrollToTop />
          <Header />
          <AnimatedSwitch
            atEnter={{ opacity: 0, transitionDuration: 2000 }}
            atLeave={{ opacity: 0, transitionDuration: 2000 }}
            atActive={{ opacity: 1, transitionDuration: 2000 }}
            className="switch-wrapper"
          >
            <Route exact path='/' component={MainPage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/workshop/' component={Workshop} />
            <Route exact path='/workshop/:id' component={WorkshopDetail} />
            <Route exact path='/blog/' component={BlogList} />
            <Route exact path='/blog/:id' component={BlogDetail} />
            <Route exact path='/group-work' render={() => (isLoggedIn ? <GroupWork /> : <Redirect to='/login' />)} />
            <Route exact path='/group-work/:id' render={() => (isLoggedIn ? <GroupWorkDetails /> : <Redirect to='/login' />)} />
            <Route exact path='/material' render={() => (isLoggedIn ? <HRMaterial /> : <Redirect to='/login' />)} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/login' render={() => (isLoggedIn ? <Redirect to='/' /> : <Login />)} />
            <Route exact path='/signup' render={() => (isLoggedIn ? <Redirect to='/' /> : <SignUp />)} />
            <Route exact path='/resetpass' render={() => (isLoggedIn ? <Redirect to='/' /> : <ResetPass />)} />
          </AnimatedSwitch>
        </Router>
      </div>
    );
  }
}

export default App;
