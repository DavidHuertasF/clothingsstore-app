import Header from '../components/ClothingApp/Header/Header';
import Home from '../components/ClothingApp/Home/Home';
import Search from '../components/ClothingApp/Search/Search';

import { Switch, Route } from 'react-router-dom';


import './ClothingApp.scss';


const ClothingApp = () => {
  
  return (
    <>
      <Header
      // key='1'
      // activeSidebar={showSidebar}
      // user={(user.name) ? user.name : ''}
      />

      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/search/:name'} children={<Search/>} />
      </Switch>
    </>

  )
}
export default ClothingApp;