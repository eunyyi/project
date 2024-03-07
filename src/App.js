import { Route, Routes } from 'react-router-dom';
import { MainPage } from './mainPage';
import { ShopPage } from './shopPage';
import { ShopDetailPage, shopDetailPage } from './shopDetailPage';
import { CartPage } from './cartPage';
import { LoginPage } from './login';
import { useState } from 'react';
import { JoinMembershipPage } from './joinmembership';
import { AgreementPage } from './components/agreement';
import {JoinSuccessPage} from './components/joinsuccess';


function App() {

  return (
    <>
      <Routes>
        <Route Component={MainPage} path="/" />
        <Route Component={ShopPage} path="/shop" />
        <Route Component={ShopDetailPage} path="/detail/:id"/>
        <Route Component={CartPage} path='/cart'/>
        <Route Component={LoginPage} path='/login'/>
        <Route Component={AgreementPage} path='/join_agreement'/>
        <Route Component={JoinMembershipPage} path='/join_membership'/>
        <Route Component={JoinSuccessPage} path='/join_success'/>
     
        
      </Routes>
    </>
  );
}

export default App;