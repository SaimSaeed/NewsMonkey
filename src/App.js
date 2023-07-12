import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'
import NewsItem from './components/NewsItem';

export default class App extends Component{
  render() {
    return (
      <div>
      <Navbar/>
      <News pageSize= {5}/>
     
      </div>
    )
  }
}

