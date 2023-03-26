//PAGES
import { HomePage } from './app/pages/HomePage';

//IMPORTS FROM DEPENDENCIES
import { Routes, Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
