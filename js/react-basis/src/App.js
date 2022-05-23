import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './Components/Header';
import Image from './Components/Image';
import Footer from './Components/Footer';

import Appearance from './Pages/Appearance'
import Brief from './Pages/Brief'
import Links from './Pages/Links'
import Personality from './Pages/Personality'

function App() {
  return (
    <Router>
      <div class="page">
        <Header></Header>

        <main>
          <div class="content-container">
            <Image></Image>

            <Routes>
              <Route path='/' element={<Navigate to="/brief" />} />
              <Route path='/brief' element={<Brief />} />
              <Route path='/appearance' element={<Appearance />} />
              <Route path='/personality' element={<Personality />} />
              <Route path='/links' element={<Links />} />
            </Routes>
          </div>
        </main>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
