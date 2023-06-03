import React, { useState } from 'react';
import { Header } from './Components/Header/Header';
import { LangContext } from './Components/LangContex/LangContext';
import './App.css';

function App() {
  const [lang, setLang] = useState('ua');

  return (
    <div className="App">
      <LangContext.Provider value={lang}>
        <Header />
      </LangContext.Provider>
    </div>
  );
}

export default App;
