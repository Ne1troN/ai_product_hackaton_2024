import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TopNewsScreen from './screens/TopNewsScreen'
import ArchiveNewsScreen from './screens/ArchiveNewsScreen'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <TopNewsScreen /> } />
        <Route path="/archive" element={ <ArchiveNewsScreen /> } />

      </Routes>
    </BrowserRouter>    
  );
}

export default App;
