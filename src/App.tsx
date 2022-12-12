import React from 'react';
import './App.css';
import { Question } from './components/Question/Question';
import { IAnswer } from './components/Answer/IAnswer';
import { Header } from "./layouts/Header/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';
import { Searchbar } from './components/Searchbar/Searchbar';
import { WeatherScreen } from './components/WeatherScreen/WeatherScreen';

function App() {
  return (
    <>
    <div className="App">
      <WeatherScreen/>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
