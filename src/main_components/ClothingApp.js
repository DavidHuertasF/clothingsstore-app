
import Header from '../components/ClothingApp/Header/Header';
import Home from '../components/ClothingApp/Home/Home';
import Footer from '../components/ClothingApp/Footer/Footer';

import Search from '../components/ClothingApp/Search/Search';
import SearchMessage from '../components/ClothingApp/Search/SearchMessage/SearchMessage';


import { Switch, Route } from 'react-router-dom';


import './ClothingApp.scss';


const ClothingApp = () => {

  return (
    <>
    <div id='top'></div>
      <Header
      // key='1'
      // activeSidebar={showSidebar}
      // user={(user.name) ? user.name : ''}
      />
      <div className='separator_div'></div>

      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/search/:name'} children={<Search/>   } />
        <Route exact path={'/search/'} children={<SearchMessage message='Escribe el nombre del producto para buscarlo'/>} />
      </Switch>
      <Footer/>
      
    </>

  )
}
export default ClothingApp;