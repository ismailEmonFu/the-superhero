import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header/Header';
import Author from './Author/Author';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Author></Author>
    </div >
  );
}

export default App;
