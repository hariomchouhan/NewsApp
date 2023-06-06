import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = () =>{
  const pageSize = 9;

  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);
 
    return (
      <BrowserRouter>
        <NavBar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress = {setProgress} apiKey = {apiKey}  key="general" pageSize={pageSize} country="in" category="general" />}></Route>
          <Route exact path="/business" element={<News setProgress = {setProgress} apiKey = {apiKey}  key="business" pageSize={pageSize} country="in" category="business" />}></Route>
          <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey = {apiKey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}></Route>
          <Route exact path="/health" element={<News setProgress = {setProgress} apiKey = {apiKey}  key="health" pageSize={pageSize} country="in" category="health" />}></Route>
          <Route exact path="/science" element={<News setProgress = {setProgress} apiKey = {apiKey}  key="science" pageSize={pageSize} country="in" category="science" />}></Route>
          <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey = {apiKey}  key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
          <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey = {apiKey}  key="technology" pageSize={pageSize} country="in" category="technology" />}></Route>
        
        </Routes>
      </BrowserRouter>
    )

}

export default App