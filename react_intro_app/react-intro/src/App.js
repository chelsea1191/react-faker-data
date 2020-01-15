import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CompanyList from'./components/CompanyList'
import ProductList from './components/ProductList'
import UserList from './components/UserList'
import Stats from './components/Stats'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App" id="flexContainer">
      <ProductList />
      <UserList />
      <CompanyList />
      <Stats />
    </div>
  );
}

export default App;
