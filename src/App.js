import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from './components/header';
import { Footer } from './components/footer';

import { Home } from './page/home';
import { Contact } from './page/contact';
import { About } from './page/about';
import { Category } from './page/category';
import { Recipe } from './page/recipe';

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h1>Oops!</h1>
      <h3>Sorry, an unexpected error has occurred</h3>
      <h5>Does not exist: {location.pathname}</h5>
    </div>
  )
}

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <main className="cntainer content">
          <Routes>
            < Route path="*" element={< NoMatch />}/>
            < Route path="/" element={< Home />}/>
            < Route path="contact/" element={< Contact />}/>
            < Route path="about/" element={< About />}/>
            < Route path="category/:name" element={<Category />} />
            < Route path="meal/:id" element={<Recipe />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
