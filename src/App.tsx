import React from 'react';

import './App.css';
import BookModel from './models/BookModel';
import { Footer } from './layouts/Footer';
import { HomePage } from './layouts/navbar/HomePage';
import { Navbar } from "./layouts/navbar/Navbar";
import { Carousel } from './layouts/Carousel';

function App() {
  return (
    <div>
<Navbar/>
<HomePage/>
<Carousel/>
<Footer/>

</div>
  );
}

export default App;
