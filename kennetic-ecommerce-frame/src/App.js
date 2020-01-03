import React, { useState } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import data from './data';

import Head from './Components/Head';

function App() {
  const [products] = useState(data);
  return (
    <div className="App">
      <Head />
    </div>
  );
}

export default App;
