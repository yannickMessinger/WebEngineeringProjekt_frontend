import React from 'react';
import './App.css';
import { Question } from './components/Question/Question';
import { IAnswer } from './components/Answer/IAnswer';
import { Header } from "./layouts/Header/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';
import { Searchbar } from './components/Searchbar/Searchbar';

function App() {
  return (
    <>
    <div className="App">
      <Searchbar/>
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
