import React from 'react';

import './App.css';
import { Footer } from './layouts/Footer';
import { HomePage } from './layouts/navbar/HomePage';
import { Navbar } from "./layouts/navbar/Navbar";

function App() {
  return (
    <div>
<Navbar/>
<HomePage/>
<Footer/>
</div>
  );
}

export default App;
