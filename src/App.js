import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import { Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      progress: '0'
    }
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  render() {
    return (

      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <Navbar />

        <Routes>
  <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={12} country='in' category='general' />} />
          <Route exact path="/home" element={<News setProgress={this.setProgress} key="general" pageSize={12} country='in' category='general' />} />
          <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={12} country='in' category='general' />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={12} country='in' category='health' />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={12} country='in' category='sports' />} />
          <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={12} country='in' category='entertainment' />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={12} country='in' category='technology' />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={12} country='in' category='business' />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={12} country='in' category='science' />} />
        </Routes>
      </BrowserRouter>

    )
  }
}
