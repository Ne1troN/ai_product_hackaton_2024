import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FreshNewsScreen from './screens/FreshNewsScreen'
import ArchiveNewsScreen from './screens/ArchiveNewsScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={ <FreshNewsScreen /> } />
        <Route path="/archive" element={ <ArchiveNewsScreen /> } />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
