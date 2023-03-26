//PAGES
import { HomePage } from './app/pages/HomePage';

//COMPONENTS
import NavigationBar from './app/components/NavigationBar';
import Footer from './app/components/Footer';

//IMPORTS FROM DEPENDENCIES
import { Routes, Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
